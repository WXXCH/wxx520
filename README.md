# wxx520
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>王霄霄女士,你的爱已送达,请签收</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        .city {
            width: 100%;
            position: fixed;
            bottom:
                    0px;
            z-index: 100;
        }

        .city img {
            width: 100%;
        }

        audio {
            opacity: 0;
        }
    </style>
    <title>
        放烟花
    </title>
    <link href="css/modal.css" rel="stylesheet" />
</head>

<body onselectstart="return false">
<!--对话部分-->
<div class="share_img"><img src="src/images/a8b.png" alt=""></div>

<div class="page_one">
    <div class="content">
        <div class="text_wrapper">
            <img src="src/images/a8.png" alt="">
            <div class="text">
                小笨蛋，在一起多长时间啦，还记得吗
            </div>
        </div>
    </div>
    <div class="btn-groups">
        <div class="heart-btn">
            <div id="yes" class="btn btn-a"><span>记得</span></div>
        </div>
        <div id="no" class="btn btn-b"><span>不记得</span></div>
    </div>
</div>
<!--烟花部分-->
<canvas id='cas' style="background-color:rgba(0,5,24,1)">
    浏览器不支持canvas
</canvas>
<div class="city">
    <img src="src/images/city.png" alt="" />
</div>
<img src="src/images/moon.png" alt="" id="moon" style="visibility: hidden;" />
<div style="display:none">
    <div class="shape">
        王霄霄
    </div>
    <div class="shape">
        我爱你
    </div>
</div>
<!--音乐部分-->
<audio autoplay loop id="music">
    <source src="music.mp3" />
</audio>
<iframe id="iframMusic" allow="autoplay" style="display:none" src="blank.mp3"></iframe>
<script src="js/jquery.min.js"></script>
<script src="js/fire.js"></script>
<script src="js/talk.js"></script>
</body>

</html>
