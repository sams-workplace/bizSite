package bizsite.domain.Bidding;

import bizsite.infra.AbstractEvent;
import lombok.Data;

@Data
public class ReservationRequested extends AbstractEvent{

  public ReservationRequested(GameReservation aggregate) {
    super(aggregate);
  }

  public ReservationRequested() {
      super();
  }

  // 경매기준: 사업장에 비딩정보 전달
  // 사업장기준 : 게임 비딩정보 수신

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


  public String getClientRequest() {
    return this.clientRequest;
  }
  public void setClientRequest(String clientRequest) {
    this.clientRequest = clientRequest;
  }
}
