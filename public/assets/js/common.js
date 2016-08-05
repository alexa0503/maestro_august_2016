//http://campaign.maestro.com.cn/augsoc2/publichttp://campaign.maestro.com.cn/augsoc2/public/assets/

//找到url中匹配的字符串
function findInUrl(str) {
    url = location.href;
    return url.indexOf(str) == -1 ? false : true;
}
//获取url参数
function queryString(key) {
    return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
}

//产生指定范围的随机数
function randomNumb(minNumb, maxNumb) {
    var rn = Math.round(Math.random() * (maxNumb - minNumb) + minNumb);
    return rn;
}

var wHeight;
var orgnilWHeight;
$(document).ready(function() {
    wHeight = $(window).height();
	orgnilWHeight = $(window).height();

		var bli=wHeight/1109;
		$('.page').css('-webkit-transform','scale('+bli+')');
		$('#canvas').css('-webkit-transform','scale('+bli+')');

		if(wHeight<1008){
			$('.page').css('-webkit-transform-origin',"50% 50%");
			$('#canvas').css('-webkit-transform-origin',"50% 50%");
			}
        $('body').on('touchmove', function(e) {
            e.preventDefault();
        });

    $('.pageOuter').height(wHeight);
    $('.page').height(wHeight);
    //$('.h1008').css('padding-top', (wHeight - 1008) / 2 + 'px');

    loadImg();
});

var rNumb = randomNumb(1, 6);

var manifest, manifest2, manifest3, manifest4;
var preload, preload2, preload3, preload4;
//定义相关JSON格式文件列表
function setupManifest() {
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSound({src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/bgm0.mp3",id: "bgm0"});
	createjs.Sound.registerSound({src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/bgm1.mp3",id: "bgm1"});
	createjs.Sound.registerSound({src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/bgm2.mp3",id: "bgm2"});
	createjs.Sound.registerSound({src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/bgm3.mp3",id: "bgm3"});
	createjs.Sound.registerSound({src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/bgm4.mp3",id: "bgm4"});
	createjs.Sound.registerSound({src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/bgm5.mp3",id: "bgm5"});
	createjs.Sound.registerSound({src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/bgm6.mp3",id: "bgm6"});

    manifest = [];
	manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/btn.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page1Img1.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page1Img1b.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/topArrow.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/shareNote.png"
    });

    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/a1/act.png"
    });

    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page3Img1.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page4Img11.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page4Img12.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page4Img13.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page4Img14.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page4Img15.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page4Img16.png"
    });

    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page5Img11.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page5Img12.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page5Img13.png"
    });

    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page6Img1.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page7Img1.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page8Img1.png"
    });
    manifest.push({
        src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/page9Img1.png"
    });

    startPreload();
}

function setupManifest2() {
    manifest2 = [];
    for (var j = 1; j <= 87; j=j+2) {
        if (j < 10) {
            manifest2.push({
                src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b0" + j + ".png"
            });
        } else {
            manifest2.push({
                src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b" + j + ".png"
            });
        }
    }
    startPreload2();
}

function setupManifest3() {
    manifest3 = [];
    for (var i = 1; i <= 65; i=i+2) {
        if (i < 10) {
            manifest3.push({
                src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/a2/a0" + i + ".png"
            });
        } else {
            manifest3.push({
                src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/a2/a" + i + ".png"
            });
        }
    }

    startPreload3();
}

function setupManifest4() {
    manifest4 = [];
    for (var j = 88; j <= 167; j=j+2) {
        if (j < 10) {
            manifest4.push({
                src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b0" + j + ".png"
            });
        } else {
            manifest4.push({
                src: "http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b" + j + ".png"
            });
        }
    }
    startPreload4();
}


function startPreload() {
    preload = new createjs.LoadQueue(false);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.loadManifest(manifest);
}

function startPreload2() {
    preload2 = new createjs.LoadQueue(false);
    preload2.on("progress", handleFileProgress2);
    preload2.on("complete", loadComplete2);
    preload2.loadManifest(manifest2);
}

function startPreload3() {
    preload3 = new createjs.LoadQueue(false);
    preload3.on("progress", handleFileProgress3);
    preload3.on("complete", loadComplete3);
    preload3.loadManifest(manifest3);
}

function startPreload4() {
    preload4 = new createjs.LoadQueue(false);
    preload4.on("progress", handleFileProgress4);
    preload4.on("complete", loadComplete4);
    preload4.loadManifest(manifest4);
}

var loadImgHeight1 = 0;
var loadImgHeight2 = 0;
var loadImgHeight3 = 0;
var loadImgHeight4 = 0;

//已加载完毕进度
function handleFileProgress(event) {
    loadImgHeight1 = preload.progress * 29;
    $(".loadingImg").height(loadImgHeight1 + loadImgHeight2 + loadImgHeight3 + loadImgHeight4);
	setTimeout(function(){
		$('.loadingTxt span').html(Math.round((preload.progress+preload2.progress+preload3.progress+preload4.progress)*25));
		},100);
}

function handleFileProgress2(event) {
    loadImgHeight2 = preload2.progress * 29;
    $(".loadingImg").height(loadImgHeight1 + loadImgHeight2 + loadImgHeight3 + loadImgHeight4);
	setTimeout(function(){
		$('.loadingTxt span').html(Math.round((preload.progress+preload2.progress+preload3.progress+preload4.progress)*25));
		},100);
}

function handleFileProgress3(event) {
    loadImgHeight3 = preload3.progress * 29;
    $(".loadingImg").height(loadImgHeight1 + loadImgHeight2 + loadImgHeight3 + loadImgHeight4);
	setTimeout(function(){
		$('.loadingTxt span').html(Math.round((preload.progress+preload2.progress+preload3.progress+preload4.progress)*25));
		},100);
}

function handleFileProgress4(event) {
    loadImgHeight4 = preload4.progress * 30;
    $(".loadingImg").height(loadImgHeight1 + loadImgHeight2 + loadImgHeight3 + loadImgHeight4);
	setTimeout(function(){
		$('.loadingTxt span').html(Math.round((preload.progress+preload2.progress+preload3.progress+preload4.progress)*25));
		},100);
}

//全度资源加载完毕
var isLoadEnd1 = false;
var isLoadEnd2 = false;
var isLoadEnd3 = false;
var isLoadEnd4 = false;

function loadComplete(event) {
    isLoadEnd1 = true;
    if (isLoadEnd1 && isLoadEnd2 && isLoadEnd3 && isLoadEnd4) {
        goPage1();
    }
}

function loadComplete2(event) {
    isLoadEnd2 = true;
    if (isLoadEnd1 && isLoadEnd2 && isLoadEnd3 && isLoadEnd4) {
        goPage1();
    }
}

function loadComplete3(event) {
    isLoadEnd3 = true;
    if (isLoadEnd1 && isLoadEnd2 && isLoadEnd3 && isLoadEnd4) {
        goPage1();
    }
}

function loadComplete4(event) {
    isLoadEnd4 = true;
    if (isLoadEnd1 && isLoadEnd2 && isLoadEnd3 && isLoadEnd4) {
        goPage1();
    }
}

function loadImg() {
    setupManifest();
    setupManifest2();
    setupManifest3();
    setupManifest4();
}

var isGo1 = false;

function goPage1() {
    if (!isGo1) {
        isGo1 = true;
		bgm0=createjs.Sound.play("bgm0",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        $('body').removeClass('noImg');
        $('.page0').fadeOut(500);
        $('.page1').fadeIn(500);
    }
}

var isAct1 = false;

function page1Act() {
    if (!isAct1) {
        isAct1 = true;
        act1();
        $('.page1Img1').hide();
        $('.page1Img1b').hide();
        $('#canvas').show();
        setTimeout(function() {
            page1Act2();
        }, 1000);
		ga('send', 'event', 'button', 'click', 'playgame');
    }
}

var act2Arr = [];
var act2Numb = 65;
var act2roolNumb = 30;
for (var i = 1; i <= act2Numb + act2roolNumb; i=i+2) {
    if (i < 10) {
        act2Arr.push("http://campaign.maestro.com.cn/augsoc2/public/assets/images/a2/a0" + i + ".png");
    } else if (i <= act2Numb) {
        act2Arr.push("http://campaign.maestro.com.cn/augsoc2/public/assets/images/a2/a" + i + ".png");
    } else {
        act2Arr.push("http://campaign.maestro.com.cn/augsoc2/public/assets/images/a2/a" + (act2Numb - i + act2Numb) + ".png");
    }
}

function page1Act2() {
    // Define a spritesheet. Note that this data was exported by Zoë.
	//alert(act2Arr.toString());
	$('body').css('background','#000');

    var spriteSheet2 = new createjs.SpriteSheet({
        framerate: 4,
        "images": act2Arr,
        "frames": {
            "regX": 0,
            "height": 1109,
            "count": act2Numb + act2roolNumb,
            "regY": 0,
            "width": 640
        },
        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
        "animations": {
            "act2": [0, (act2Numb-1)/2-1, 'act22'],
            "act22": [(act2Numb-1)/2-1 + 1, (act2Numb-1)/2-1 + act2roolNumb/2, 'act23'],
            "act23": [act2roolNumb/2+1, (act2Numb-1)/2-1, 'act22'],
        }
    });

	bgm2=createjs.Sound.play("bgm2");
    setTimeout(function() {
		bgm2.stop();
        bgm3=createjs.Sound.play("bgm3");
    }, 2000);

    setTimeout(function() {
        canClickStep = 1;
        stage.addChild(downArrow);
        createjs.Tween.get(downArrow, {
                loop: true
            })
            .to({
                y: 920,
            }, 1000, createjs.Ease.get(1))
            .to({
                y: 950
            }, 1000, createjs.Ease.get(1))
    }, 2500);

    // Events from SpriteSheet (not required for the demo)
    /*spriteSheet2.on("complete", function(event) {
    	console.log("Complete", event);
    });
    spriteSheet2.on("error", function(event) {
    	console.log("Error", event);
    });*/

    grant2 = new createjs.Sprite(spriteSheet2, "act2");
    grant2.x = 0;
    grant2.y = 0;

    // Add Grant to the stage, and add it as a listener to Ticker to get updates each frame.
    stage.removeChild(grant);
    stage.addChild(grant2);

	$("#canvas").touchwipe({
		min_move_x: 40, //横向灵敏度
		min_move_y: 40, //纵向灵敏度
		wipeUp: function() {conctolStageClick();}, //向上滑动事件
 		wipe:function(){conctolStageClick();}, //触摸事件
		preventDefaultEvents: true //阻止默认事件
		});
}

var act3Arr = [];
var act3Numb = 61;
var act3roolNumb = 53;
for (var j = 1; j <= act3Numb; j=j+2) {
    if (j < 10) {
        act3Arr.push("http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b0" + j + ".png");
    } else {
        act3Arr.push("http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b" + j + ".png");
    }
}

function page1Act3() {
    // Define a spritesheet. Note that this data was exported by Zoë.
    var spriteSheet3 = new createjs.SpriteSheet({
        framerate: 4,
        "images": act3Arr,
        "frames": {
            "regX": 0,
            "height": 1109,
            "count": (act3Numb-1)/2,
            "regY": 0,
            "width": 640
        },
        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
        "animations": {
            "act3": [0, (act3Numb-1)/2 - 1, 'act31'],
            "act31": [(act3roolNumb-1)/2, (act3Numb-1)/2 - 1, 'act31']
        }
    });

	bgm5=createjs.Sound.play("bgm5",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});

	setTimeout(function(){
		bgm5.stop();
		bgm4=createjs.Sound.play("bgm4",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
		},2000);

    setTimeout(function() {
        canClickStep = 3;
        stage.addChild(downArrow);
        createjs.Tween.get(downArrow, {
                loop: true
            })
            .to({
                y: 920,
            }, 1000, createjs.Ease.get(1))
            .to({
                y: 950
            }, 1000, createjs.Ease.get(1))
    }, 5000);

    // Events from SpriteSheet (not required for the demo)
    /*spriteSheet3.on("complete", function(event) {
    	//console.log("Complete", event);
    });
    spriteSheet3.on("error", function(event) {
    	console.log("Error", event);
    });*/

    grant3 = new createjs.Sprite(spriteSheet3, "act3");
    grant3.x = 0;
    grant3.y = 0;

    // Add Grant to the stage, and add it as a listener to Ticker to get updates each frame.
    stage.removeChild(grant2, downArrow);
    stage.addChild(grant3);
}

var act4Arr = [];
var act4Numb = 62;
var act4Numb2 = 167;
var act4roolNumb = 157;
for (var l = act4Numb-1; l <= act4Numb2; l=l+2) {
    if (l < 10) {
        act4Arr.push("http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b0" + l + ".png");
    } else {
        act4Arr.push("http://campaign.maestro.com.cn/augsoc2/public/assets/images/b1/b" + l + ".png");
    }
}

function page1Act4() {
    // Define a spritesheet. Note that this data was exported by Zoë.
    var spriteSheet4 = new createjs.SpriteSheet({
        framerate: 4,
        "images": act4Arr,
        "frames": {
            "regX": 0,
            "height": 1109,
            "count": (act4Numb2 - act4Numb-1)/2,
            "regY": 0,
            "width": 640
        },
        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
        "animations": {
            "act4": [12, ((act4Numb2 - act4Numb-1)/2 - 1), 'act41'],
            "act41": [(act4roolNumb - act4Numb-1)/2, ((act4Numb2 - act4Numb-1)/2 - 1), 'act41']
        }
    });

	bgm4.stop();
	createjs.Sound.play("bgm6");

	setTimeout(function(){
		stage.addChild(btn);
        createjs.Tween.get(btn, {loop:false}).to({scaleX:0.5,scaleY:0.5},300,createjs.Ease.get(1));
		},8000);

    setTimeout(function() {
        createjs.Sound.play("bgm3");
    }, 8000);

    setTimeout(function() {
        canClickStep = 5;
    }, 8000);

    // Events from SpriteSheet (not required for the demo)
    /*spriteSheet3.on("complete", function(event) {
    	//console.log("Complete", event);
    });
    spriteSheet3.on("error", function(event) {
    	console.log("Error", event);
    });*/

    grant4 = new createjs.Sprite(spriteSheet4, "act4");
    grant4.x = 0;
    grant4.y = 0;

    // Add Grant to the stage, and add it as a listener to Ticker to get updates each frame.
    stage.removeChild(grant3);
    stage.addChild(grant4);
}

var canClickStep = 0;

function conctolStageClick() {
    if (canClickStep == 1) {
        canClickStep = 2;
        page1Act3();
		ga('send', 'event', 'button', 'click', 'play2');
    } else if (canClickStep == 3) {
        canClickStep = 4;
        page1Act4();
		ga('send', 'event', 'button', 'click', 'play3');
    } else if (canClickStep == 5) {
        canClickStep = 6;
        goPage3();
		ga('send', 'event', 'button', 'click', 'goluckydraw');
    }
}

var isGo2 = false;

function goPage2() {
    if (!isGo2) {
        isGo2 = true;
        $('#canvas').fadeOut(500);
        $('body').addClass('bgToBlack');
        $('.page1').hide();
        $('.page2').fadeIn(500);
        setTimeout(function() {
            page2Act();
        }, 1000);
    }
}

function page2Act() {
    $('body').removeClass('bgToBlack');
    $('.page2Img1').hide();
    $('.page2Img2').show();

    setTimeout(function() {
        $('.page2Img2').hide();
        $('.page2Img3').show();

        setTimeout(function() {
            $('.page2Img3').hide();
            $('.page2Img4').show();
        }, 1000);

    }, 1000);
}

var isGo3 = false;
var prizeNumb;

function goPage3() {
	showLoading();
	var token = $('input[name="_token"]').val();
	//ajax抽奖
    $.ajax(actUrl, {
		data: {_token: token},
        type: 'post',
        dataType: 'json',
        success: function(json) {
			closeLoading();
            if(json && json.prize && json.prize > 0){
				prizeNumb=json.prize;
				if(prizeNumb==1){
					rNumb=5;
					}
					else if(prizeNumb==2){
						rNumb=3;
						}
						else{
							rNumb=4;
							}

				$('.page4Img1').addClass('page4Img1' + rNumb);
				$('.endImg').attr('src', 'http://campaign.maestro.com.cn/augsoc2/public/assets/images/' + rNumb + '.gif');
				$('.page8Img2').addClass('page8Img2'+rNumb);
				if (!isGo3) {
					isGo3 = true;
					bgm6=createjs.Sound.play("bgm6",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
					$('#canvas').fadeOut(500);
					$('.page1').hide();
					$('.page2').hide();
					$('.page3').fadeIn(500);
					/*setTimeout(function(){
						$('.page3Img1').css('background-position','-640px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-1280px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-1920px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-2560px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-32000px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position',-(rNumb + 5) * 640+'px 0');
					setTimeout(function(){
						bgm6.stop();goPage4();
						},1000);
						},500);
						},500);
						},500);
						},500);
						},500);
						},500);*/
					$('.page3Img1').delay(500).animate({backgroundPosition: -(rNumb + 5) * 640}, 1800 + (rNumb - 1) * 300, 'linear', function() {setTimeout(function() {bgm6.stop();goPage4();}, 1000);});
				}
			}
			else{
				prizeNumb=0;
				$('.page4Img1').addClass('page4Img1' + rNumb);
				$('.endImg').attr('src', 'http://campaign.maestro.com.cn/augsoc2/public/assets/images/' + rNumb + '.gif');
				$('.page8Img2').addClass('page8Img2'+rNumb);
				if (!isGo3) {
					isGo3 = true;
					bgm6=createjs.Sound.play("bgm6",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
					$('#canvas').fadeOut(500);
					$('.page1').hide();
					$('.page2').hide();
					$('.page3').fadeIn(500);
					/*setTimeout(function(){
						$('.page3Img1').css('background-position','-640px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-1280px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-1920px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-2560px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-32000px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position',-(rNumb + 5) * 640+'px 0');
					setTimeout(function(){
						bgm6.stop();goPage4();
						},1000);
						},500);
						},500);
						},500);
						},500);
						},500);
						},500);*/
					$('.page3Img1').delay(500).animate({backgroundPosition: -(rNumb + 5) * 640}, 1800 + (rNumb - 1) * 300, 'linear', function() {setTimeout(function() {bgm6.stop();goPage4();}, 1000);});
				}
			}
        },
        error: function() {
			closeLoading();
			prizeNumb=0;
		    $('.page4Img1').addClass('page4Img1' + rNumb);
			$('.endImg').attr('src', 'http://campaign.maestro.com.cn/augsoc2/public/assets/images/' + rNumb + '.gif');
			$('.page8Img2').addClass('page8Img2'+rNumb);
			if (!isGo3) {
				isGo3 = true;
				bgm6=createjs.Sound.play("bgm6",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
				$('#canvas').fadeOut(500);
				$('.page1').hide();
				$('.page2').hide();
				$('.page3').fadeIn(500);
				/*setTimeout(function(){
						$('.page3Img1').css('background-position','-640px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-1280px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-1920px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-2560px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position','-32000px 0');
					setTimeout(function(){
						$('.page3Img1').css('background-position',-(rNumb + 5) * 640+'px 0');
					setTimeout(function(){
						bgm6.stop();goPage4();
						},1000);
						},500);
						},500);
						},500);
						},500);
						},500);
						},500);*/
				$('.page3Img1').delay(500).animate({backgroundPosition: -(rNumb + 5) * 640}, 1800 + (rNumb - 1) * 300, 'linear', function() {setTimeout(function() {goPage4();bgm6.stop();}, 1000);});
			}
        }
    })
}

function goPage4() {
    $('.page3').hide();
    $('.page4').show();
}

function pageLottery() {
    if(prizeNumb==1||prizeNumb==2||prizeNumb==3){
		$('.page5Img1').addClass('page5Img1' + prizeNumb);
		$('.page4').fadeOut(500);
		$('.page5').fadeIn(500);
		}
		else if(prizeNumb==0){
			$('.page4').fadeOut(500);
		    $('.page8').fadeIn(500);
			}
			else{
				$('.page4').fadeOut(500);
		        $('.page8').fadeIn(500);
				}
}

function goPage9() {
    $('.page8').fadeOut(500);
    $('.page9').fadeIn(500);
	ga('send', 'event', 'button', 'click', 'result'+prizeNumb+rNumb);
}

function goPage6() {
    $('.page5').fadeOut(500);
    $('.page6').fadeIn(500);
	ga('send', 'event', 'button', 'click', 'result'+prizeNumb+rNumb);
}

function submitInfo(url) {
    var iName = $.trim($('.infoTxt1').val());
    var iTel = $.trim($('.infoTxt2').val());
    var iAddress = $.trim($('.infoTextarea').val());
    var pattern = /^1\d{10}$/;
    if (iName == '') {
        alert('请输入姓名');
        return false;
    } else if (iTel == '' || !pattern.test(iTel)) {
        alert('请输入正确的手机号码');
        return false;
    } else if (iAddress == '') {
        alert('请输入地址');
        return false;
    } else {
        showLoading();
        //ajax提交
    	var token = $('input[name="_token"]').val();
        $.ajax(url, {
    		data: {_token: token,name:iName,mobile:iTel,address:iAddress},
            type: 'post',
            dataType: 'json',
            success: function(json) {
    			closeLoading();
                if(json && json.ret == 0){
    				goPage7();
    			}
                else{
                    alert(json.msg);
                }
            },
            error: function() {
    			closeLoading();
            }
        })

    }
}

function goPage7() {
    $('.page6').fadeOut(500);
    $('.page7').fadeIn(500);
}

function showLoading() {
    $('.loadingBg').show();
    $('.loadingGif').show();
}

function closeLoading() {
    $('.loadingBg').hide();
    $('.loadingGif').hide();
}

function showShare() {
    $('.loadingBg').show();
    $('.shareNote').show();
}

function closeShare() {
    $('.loadingBg').hide();
    $('.shareNote').hide();
}

var stage, grant, grant2, grant3, grant4, downArrow,btn, bgm0,bgm1,bgm2,bgm3,bgm4,bgm5,bgm6;

function act1() {
    // create a new stage and point it at our canvas:
    stage = new createjs.Stage(document.getElementById("canvas"));

    // Define a spritesheet. Note that this data was exported by Zoë.
    var spriteSheet = new createjs.SpriteSheet({
        framerate: 4,
        "images": ["http://campaign.maestro.com.cn/augsoc2/public/assets/images/a1/act.png"],
        "frames": {
            "regX": 0,
            "height": 1109,
            "count": 7,
            "regY": 0,
            "width": 640
        },
        "animations": {
            "act1": [0, 7, '']
        }
    });

    downArrow = new createjs.Bitmap("http://campaign.maestro.com.cn/augsoc2/public/assets/images/topArrow.png");
    downArrow.x = 275;
    downArrow.y = 950;

	btn = new createjs.Bitmap("http://campaign.maestro.com.cn/augsoc2/public/assets/images/btn.png");
    btn.x = 450;
    btn.y = 750;

    // Events from SpriteSheet (not required for the demo)
    /*spriteSheet.on("complete", function(event) {
    	console.log("Complete", event);
    });
    spriteSheet.on("error", function(event) {
    	console.log("Error", event);
    });*/

	bgm0.stop();
    bgm1 = createjs.Sound.play("bgm1");

    grant = new createjs.Sprite(spriteSheet, "act1");
    grant.x = 0;
    grant.y = 0;

    // Add Grant to the stage, and add it as a listener to Ticker to get updates each frame.
    stage.addChild(grant);
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", stage);
}

function backLottery(){
	$('#canvas').show();
	$('.page9').hide();
	$('.page7').hide();
	$('.page3Img1').css('background-position','0 0');
	canClickStep=5;
	isGo3=false;
	rNumb = randomNumb(1, 6);
	$('.page4Img1').removeClass('page4Img11 page4Img12 page4Img13 page4Img14 page4Img15 page4Img16');
	$('.page8Img2').removeClass('page8Img21 page8Img22 page8Img23 page8Img24 page8Img25 page8Img26');
	}
