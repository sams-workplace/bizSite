package bizsite.domain.Bidding;

import bizsite.infra.AbstractEvent;
import lombok.Data;

@Data
public class BiddingAttended extends AbstractEvent {

  public BiddingAttended(GameReservation aggregate) {
    super(aggregate);
  }

  public BiddingAttended() {
      super();
  }

  // 경매기준: 사업장으로부터 비딩요청을 받음
  // 사업장기준 : 게임금액을 기입하여 응찰

  // 경매진행상태
  // 01. bidding        // 진행중
  // 02. biddingSuccess // 성공
  // 03. biddingFail    // 실패

  // 진행상태
  // 01. ReservationRequest      // 예약요청
  // 02. ReservationConfirmation // 예약확정
  // 03. ReservationCancel       // 예약취소
  // 04. ReservationFail         // 예약실패

  private Long id;
  private String biddingId;
  private String gameReservationId;
  private String businessId;        // 사업장ID
  private String businessName;      // 사업장명
  private String businessPhoneNum;  // 사업장연락처
  private String biddingAmount;     // 응찰금액
  private String biddingStatus;     // 진행상태

  // 추가필드정의(사업장 별도 관리)
  private String bizSiteReqDttm;    // 경매전송일자
  private String bizSiteAtendDttm;  // 경매응찰일자
  private String bizSiteProcDttm;   // 경매결과수신일자

  public Long getId() {
  	return this.id;
  }
  public void setId(Long id) {
  	this.id = id;
  }

  public String getBiddingId() {
  	return this.biddingId;
  }
  public void setBiddingId(String biddingId) {
  	this.biddingId = biddingId;
  }


  public String getGameReservationId() {
  	return this.gameReservationId;
  }
  public void setGameReservationId(String gameReservationId) {
  	this.gameReservationId = gameReservationId;
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


}
