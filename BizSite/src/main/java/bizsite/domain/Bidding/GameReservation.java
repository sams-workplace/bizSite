package bizsite.domain.Bidding;

import bizsite.BizSiteApplication;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import javax.persistence.*;

import org.springframework.beans.BeanUtils;
import lombok.Data;

@Entity
@Table(name = "GameReservation_table")
@Data
public class GameReservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    // GAMERESERVATION
    private Long id;
    private String gameReservationId;  // 게임ID
    private String memberId;           // 신청자ID
    private String biddingId;          // 경매ID
    private String memberCount;        // 인원
    private String reservationTime;    // 요청일시
    private String location;           // 장소
    private String memberName;         // 예약자명
    private String memberPhoneNum;     // 연락처
    private String reservationStatus;  // 진행상태
    private String paymentAmount;      // 결제금액
    private String clientRequest;      // 고객요청사항

    // BIDDING
    //private String  biddingId;
    //private String  gameReservationId;
    private String businessId;         // 사업장ID
    private String businessName;       // 사업장명
    private String businessPhoneNum;   // 사업장연락처
    private String biddingAmount;      // 응찰금액
    private String biddingStatus;      // 진행상태

    private String bizSiteReqDttm;     // 경매전송일자
    private String bizSiteAtendDttm;   // 경매응찰일자
    private String bizSiteProcDttm;    // 경매결과수신일자

    public static GameReservationRepository repository() {
      GameReservationRepository gameReservationRepository = BizSiteApplication.applicationContext.getBean(
        GameReservationRepository.class
      );
      return gameReservationRepository;
    }

    // 업데이트 후 kafka message 생성(publish)
    @PostUpdate
    public void onPostUpdate() {

        // 경매 진행상태
        // CONFIRMED : 예약확정
        // CANCELED : 취소
        // PROGRESSED : 진행중

        // 02 : 등록승인 - 사용자 알림
        if( "PROGRESSED".equals( getReservationStatus() ) ){
            BiddingAttended biddingAttended = new BiddingAttended();
            BeanUtils.copyProperties(this, biddingAttended);
            biddingAttended.publish();
        }
    }


    public static void approveRegist(ReservationRequested reservationRequested) {
      GameReservation gameReservation = new GameReservation();
      BeanUtils.copyProperties(reservationRequested, gameReservation);

      // 최초등록시 진행상태 설정
      gameReservation.setReservationStatus("REQUESTED");
      repository().save(gameReservation);

    }

    public static void approveUpdate(ReservationConfirmed receiveBiddingRslt) {

      // 게임ID 로 기존 데이터 조회
      Optional<GameReservation> temp = repository().findByGameReservationId(receiveBiddingRslt.getGameReservationId());

      // 게임ID 가 존재하지 않을 경우 예외처리
      if(!temp.isPresent()) {
        throw new IllegalArgumentException();
      }

      // 경매결과 저장을 위한 클래스 선언 및 데이터 복사
      GameReservation gameReservation = new GameReservation();
      gameReservation = temp.get();

      Date today = new Date();
      SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
      String dttm = date.format(today);

      // 진행상태, 낙찰금액, 전송일자 세팅
      gameReservation.setReservationStatus(receiveBiddingRslt.getBiddingStatus());
      gameReservation.setPaymentAmount(receiveBiddingRslt.getBiddingAmount());
      gameReservation.setBizSiteProcDttm(dttm);

      // 경매결과 업데이트
      repository().save(gameReservation);
    }

    public Long getId() {
    	return this.id;
    }
    public void setId(Long id) {
    	this.id = id;
    }


    public String getGameReservationId() {
    	return this.gameReservationId;
    }
    public void setGameReservationId(String gameReservationId) {
    	this.gameReservationId = gameReservationId;
    }


    public String getMemberId() {
    	return this.memberId;
    }
    public void setMemberId(String memberId) {
    	this.memberId = memberId;
    }


    public String getBiddingId() {
    	return this.biddingId;
    }
    public void setBiddingId(String biddingId) {
    	this.biddingId = biddingId;
    }


    public String getMemberCount() {
    	return this.memberCount;
    }
    public void setMemberCount(String memberCount) {
    	this.memberCount = memberCount;
    }


    public String getReservationTime() {
    	return this.reservationTime;
    }
    public void setReservationTime(String reservationTime) {
    	this.reservationTime = reservationTime;
    }


    public String getLocation() {
    	return this.location;
    }
    public void setLocation(String location) {
    	this.location = location;
    }


    public String getMemberName() {
    	return this.memberName;
    }
    public void setMemberName(String memberName) {
    	this.memberName = memberName;
    }


    public String getMemberPhoneNum() {
    	return this.memberPhoneNum;
    }
    public void setMemberPhoneNum(String memberPhoneNum) {
    	this.memberPhoneNum = memberPhoneNum;
    }


    public String getReservationStatus() {
    	return this.reservationStatus;
    }
    public void setReservationStatus(String reservationStatus) {
    	this.reservationStatus = reservationStatus;
    }


    public String getPaymentAmount() {
    	return this.paymentAmount;
    }
    public void setPaymentAmount(String paymentAmount) {
    	this.paymentAmount = paymentAmount;
    }


    public String getBusinessId() {
    	return this.businessId;
    }
    public void setBusinessId(String businessId) {
    	this.businessId = businessId;
    }


    public String getBusinessName() {
    	return this.businessName;
    }
    public void setBusinessName(String businessName) {
    	this.businessName = businessName;
    }


    public String getBusinessPhoneNum() {
    	return this.businessPhoneNum;
    }
    public void setBusinessPhoneNum(String businessPhoneNum) {
    	this.businessPhoneNum = businessPhoneNum;
    }


    public String getBiddingAmount() {
    	return this.biddingAmount;
    }
    public void setBiddingAmount(String biddingAmount) {
    	this.biddingAmount = biddingAmount;
    }


    public String getBiddingStatus() {
    	return this.biddingStatus;
    }
    public void setBiddingStatus(String biddingStatus) {
    	this.biddingStatus = biddingStatus;
    }


    public String getBizSiteReqDttm() {
    	return this.bizSiteReqDttm;
    }
    public void setBizSiteReqDttm(String bizSiteReqDttm) {
    	this.bizSiteReqDttm = bizSiteReqDttm;
    }


    public String getBizSiteAtendDttm() {
    	return this.bizSiteAtendDttm;
    }
    public void setBizSiteAtendDttm(String bizSiteAtendDttm) {
    	this.bizSiteAtendDttm = bizSiteAtendDttm;
    }


    public String getBizSiteProcDttm() {
    	return this.bizSiteProcDttm;
    }
    public void setBizSiteProcDttm(String bizSiteProcDttm) {
    	this.bizSiteProcDttm = bizSiteProcDttm;
    }

    public String getClientRequest() {
      return this.clientRequest;
    }
    public void setClientRequest(String clientRequest) {
      this.clientRequest = clientRequest;
    }


}
