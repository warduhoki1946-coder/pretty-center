function sharePage(){

    if(navigator.share){

        navigator.share({
            title:"Pretty Center",
            text:"Visit Pretty Center",
            url:window.location.href
        });

    }else{

        navigator.clipboard.writeText(window.location.href);

        alert("Link copied successfully.");

    }

}.footer{

    margin-top:25px;

}

.call,
.share{

    display:inline-block;

    margin:8px;

    text-decoration:none;

    padding:12px 18px;

    border-radius:12px;

    color:white;

    background:#d63384;

    transition:.3s;

}

.call:hover,
.share:hover{

    transform:scale(1.05);

}
