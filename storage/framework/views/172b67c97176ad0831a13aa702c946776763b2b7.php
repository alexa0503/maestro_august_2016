<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="format-detection" content="telephone=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="x-ua-compatible" content="IE=edge" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title><?php echo e(env("PAGE_TITLE")); ?></title>
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/common.css')); ?>">

    <script>
        var wxData = {};
        var wxShareUrl = '<?php echo e(url("wx/share")); ?>';
    </script>
    <script src="<?php echo e(asset('assets/js/jquery-1.9.1.min.js')); ?>"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="<?php echo e(asset('assets/js/wx.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/preloadjs-0.6.2.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/easeljs-0.8.2.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/tweenjs-0.6.2.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/soundjs-0.6.2.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/common.js')); ?>"></script>

    <!--移动端版本兼容 -->
    <script type="text/javascript">
        var phoneWidth = parseInt(window.screen.width);
        var phoneScale = phoneWidth / 640;
        var ua = navigator.userAgent;
        if (/Android (\d+\.\d+)/.test(ua)) {
            var version = parseFloat(RegExp.$1);
            if (version > 2.3) {
                document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi , user-scalable=no">');
            } else {
                document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi , user-scalable=no">');
            }
        } else {
            document.write('<meta name="viewport" content="width=640, minimum-scale=0.1, maximum-scale=1.0 , user-scalable=no" />');
        }
    </script>
    <!--移动端版本兼容 end -->
</head>
<body class="noImg">
<?php echo $__env->yieldContent('content'); ?>
<?php echo $__env->yieldContent('scripts'); ?>
</body>
</html>
