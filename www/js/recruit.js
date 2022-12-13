document.querySelector("#send_form").onsubmit = function (e) {
  e.preventDefault();
  //truy cập vào msg
  let msgOj = document.querySelector(".msg");

  //reset thông báo
  msgOj.innerText = "";

  //truy cập thành phần
  let fNameOj = document.querySelector('input[name="fname"]');
  let bDayOj = document.querySelector('input[name="bday"]');
  let emailOj = document.querySelector('input[name="email"]');
  let phoneOj = document.querySelector('input[name="phone"]');
  let genderOj = document.querySelector('select[name="gender"]');
  let eduOj = document.querySelector('input[name="edu"]');
  let typeidOj = document.querySelector('select[name="typeid"]');
  let numIdOj = document.querySelector('input[name="numId"]');
  let iAuOj = document.querySelector('input[name="iAu"]');
  let iStateOj = document.querySelector('input[name="iState"]');
  let iDateOj = document.querySelector('input[name="iDate"]');
  let eDateOj = document.querySelector('input[name="eDate"]');
  let addressOj = document.querySelector('input[name="address"]');
  let nationOj = document.querySelector('input[name="nation"]');
  let stateOj = document.querySelector('input[name="state"]');
  let districtOj = document.querySelector('input[name="district"]');
  let bNumOj = document.querySelector('input[name="bNum"]');
  let wNumOj = document.querySelector('input[name="wNum"]');
  let posOj = document.querySelector('input[name="pos"]');

  //lấy giá trị người dùng nhập vào
  let fname = fNameOj.value;
  let bday = bDayOj.value;
  let email = emailOj.value;
  let phone = phoneOj.value;
  let gender = genderOj.value;
  let edu = eduOj.value;
  let typeid = typeidOj.value;
  let numId = numIdOj.value;
  let iAu = iAuOj.value;
  let iState = iStateOj.value;
  let iDate = iDateOj.value;
  let eDate = eDateOj.value;
  let address = addressOj.value;
  let nation = nationOj.value;
  let state = stateOj.value;
  let district = districtOj.value;
  let bNum = bNumOj.value;
  let wNum = wNumOj.value;
  let pos = posOj.value;

  //Validate Form
  let errors = {};
  if (Object.keys(errors).length == 0) {
    //không có lỗi  gì
    let data = {
      "entry.167025919": fname,
      "entry.141372740": email,
      "entry.1500130743": bday,
      "entry.884138861": phone,
      "entry.1351416339": gender,
      "entry.171090545": edu,
      "entry.2126980669": typeid,
      "entry.503452997": numId,
      "entry.1894578324": iAu,
      "entry.1011416408": iState,
      "entry.1216688114": iDate,
      "entry.192933034": eDate,
      "entry.1670549142": address,
      "entry.1197606886": nation,
      "entry.1225511538": state,
      "entry.158546683": district,
      "entry.1182684142": bNum,
      "entry.40856844": wNum,
      "entry.1294404850": pos,
    };

    let queryString = new URLSearchParams(data);

    msgOj.innerHTML =
      '<div class="alert alert-success text-center">Yêu cầu của bạn đang được xử lý...</div>';
    fetch(
      `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhAKrmli6x3NcLwrJp0-6avbJSvuXJKRk20yk4dV0BaPKPfw/formResponse?${queryString}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('hieu', err)
        msgOj.innerHTML =
          '<div class="alert alert-danger text-center">Vui lòng kiểm tra dữ liệu</div>';
      }).finally(() => {
        document.querySelector("#send_form").reset();
        msgOj.innerHTML =
          '<div class="alert alert-success text-center">Bạn đã gửi thành công</div>';
      })
  }
};
