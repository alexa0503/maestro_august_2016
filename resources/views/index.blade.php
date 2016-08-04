@extends('layouts.app')
@section('content')

<div class="pageOuter">
	<div class="innerDiv">
        <div class="page page0">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="abs loadingImg" style="height:0;"></div>
                    <div class="loading bgImg"></div>
                    <p class="loadingTxt"><span>0</span>%</p>
                </div>
            </div>
        </div>

        <div class="page page1" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page1Img1 bgImg"></div>
                    <div class="page1Img1b" ontouchend="page1Act();"></div>
                </div>
            </div>
        </div>

        <div class="page page2" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page2Img1 bgImg"></div>
                    <div class="page2Img2 bgImg" style="display:none;"></div>
                    <div class="page2Img3 bgImg" style="display:none;"></div>
                    <div class="page2Img4 bgImg" style="display:none;" ontouchend="goPage3();"></div>
                </div>
            </div>
        </div>

        <div class="page page3" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page3Img1 bgImg"></div>
                    <script>var actUrl='{{url("lottery")}}';</script>
                </div>
            </div>
        </div>

        <div class="page page4" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page4Img1 bgImg"></div>
                    <a href="javascript:void(0);" class="abs page4Btn1" onClick="pageLottery();"><img src="{{asset('assets/images/space.gif')}}" width="462" height="119"></a>
                </div>
            </div>
        </div>

        <div class="page page5" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page5Img1 bgImg"></div>
                    <img src="" class="endImg abs">
                    <a href="javascript:void(0);" class="abs page5Btn1" onClick="goPage6();"><img src="{{asset('assets/images/space.gif')}}" width="260" height="118"></a>
                </div>
            </div>
        </div>

        <div class="page page6" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page6Img1 bgImg"></div>
                    <input type="text" class="infoTxt infoTxt1" maxlength="20">
                    <input type="tel" class="infoTxt infoTxt2" maxlength="11">
                    <textarea class="infoTextarea" maxlength="60"></textarea>
                    <a href="javascript:void(0);" class="abs page6Btn1" onClick="submitInfo('{{url("info")}}');"><img src="{{asset('assets/images/space.gif')}}" width="260" height="120"></a>
                </div>
            </div>
        </div>

        <div class="page page7" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page7Img1 bgImg"></div>
                    <img src="{{asset('assets/images/qc1.png')}}" class="abs qcImg1">
                    <a href="javascript:void(0);" class="abs page9Btn1" onClick="backLottery();"><img src="{{asset('assets/images/space.gif')}}" width="198" height="92"></a>
                    <a href="javascript:void(0);" class="abs page9Btn2" onClick="showShare();"><img src="{{asset('assets/images/space.gif')}}" width="198" height="92"></a>
                </div>
            </div>
        </div>

        <div class="page page8" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page8Img1 bgImg"></div>
                    <div class="page8Img2 bgImg"></div>
                    <img src="" class="endImg abs">
                    <a href="javascript:void(0);" class="abs page5Btn1" onClick="goPage9();"><img src="{{asset('assets/images/space.gif')}}" width="260" height="118"></a>
                </div>
            </div>
        </div>

        <div class="page page9" style="display:none;">
            <div class="h1008">
                <div class="innerDiv">
                    <div class="page9Img1 bgImg"></div>

                    <img src="{{asset('assets/images/qc2.png')}}" class="abs qcImg2">

                    <p class="abs code">http://m.tb.cn/ZmjKjD</p>
                    <a href="javascript:void(0);" class="abs page9Btn1" onClick="backLottery();"><img src="{{asset('assets/images/space.gif')}}" width="198" height="92"></a>
                    <a href="javascript:void(0);" class="abs page9Btn2" onClick="showShare();"><img src="{{asset('assets/images/space.gif')}}" width="198" height="92"></a>
                </div>
            </div>
        </div>

        <canvas width="640" height="1109" id="canvas" style="display:none;"></canvas>
    </div>
</div>

<div class="loadingBg" style="display:none;"></div>
<img src="{{asset('assets/images/loading.gif')}}" width="80" height="80" class="loadingGif" style="display:none;">
<div class="shareNote" style="display:none;" onClick="closeShare();"></div>
{{ csrf_field() }}
@endsection
@section('scripts')
<script>
$(document).ready(function() {
	wxShare();
});
</script>
@endsection
