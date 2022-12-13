// Send message

document.querySelector('#send_form').onsubmit = function(e) {
    e.preventDefault();
    //truy cập vào msg
    let msgOj = document.querySelector('.msg');

    //reset thông báo
    msgOj.innerText = '';

    //Truy cập vào thành phần HTML tương ứng
    let fNameOj = document.querySelector('input[name="fname"]');
    let mailOj = document.querySelector('input[name="mail"]');
    let subjectOj = document.querySelector('input[name="subject"]');
    let contentOj = document.querySelector('input[name="content"]');

    //lấy giá trị ng dùng nhập vào
    let fname = fNameOj.value;
    let mail = mailOj.value;
    let subject = subjectOj.value;
    let content = contentOj.value;

    //Validate Form
    let errors = {};
    if(fname.trim()=='') {
        errors['fname'] = 'Họ và tên không được để trống';
        fNameOj.parentElement.querySelector('.required').innerText = errors['fname'];
    }

    if(mail.trim()=='') {
        errors['mail'] = 'Họ và tên không được để trống';
        mailOj.parentElement.querySelector('.required').innerText = errors['mail'];
    }

    if(subject.trim()=='') {
        errors['subject'] = 'Họ và tên không được để trống';
        subjectOj.parentElement.querySelector('.required').innerText = errors['subject'];
    }

    if(content.trim()=='') {
        errors['content'] = 'Họ và tên không được để trống';
        contentOj.parentElement.querySelector('.required').innerText = errors['content'];
    }

    if (Object.keys(errors).length==0){
        //không có lỗi  gì 
        let data = {
            'entry.1809699919': fname,
            'entry.2018687523': mail,
            'entry.2009267272':subject,
            'entry.98634100':content
        }

        let queryString = new URLSearchParams(data);
        queryString = queryString.toString();

        msgOj.innerHTML = '<div class="alert alert-success text-center">Yêu cầu của bạn đang được xử lý...</div>';

        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd0M_uLcnmKwJreOAoE6WNFCVHCxcSxfEmrRZlIntF4bptzYQ/formResponse', true);
        
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        msgOj.innerHTML = '<div class="alert alert-success text-center">Bạn đã gửi thành công</div>';
        //reset sau khi gửi
        fNameOj.value = '';
        mailOj.value = '';
        subjectOj.value = '';
        contentOj.value = '';
        xhr.send(queryString);

    } else{
        msgOj.innerHTML = '<div class="alert alert-danger text-center">Vui lòng kiểm tra dữ liệu</div>';
    }

    // Reset Thông báo
    let requiredOj = document.querySelectorAll('.required');
    if (requiredOj.length>0) {
        requiredOj.forEach(function(item){
            item.innerText = '';
        })
    }
    
}