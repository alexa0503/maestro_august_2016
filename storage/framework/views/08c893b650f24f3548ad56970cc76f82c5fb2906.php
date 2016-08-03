<!doctype html>
<!--[if lt IE 8]><html class="no-js lt-ie8"> <![endif]-->
<html class="no-js">
<head>
    <meta charset="utf-8">
    <title><?php echo e(env('PAGE_TITLE')); ?> - 后台管理</title>
    <!-- Mobile specific metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no">
    <!-- Force IE9 to render in normal mode -->
    <!--[if IE]><meta http-equiv="x-ua-compatible" content="IE=9" /><![endif]-->
    <meta name="author" content="" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="application-name" content="" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <!-- Import google fonts - Heading first/ text second -->
    <link href="<?php echo e(asset('assets/cms/css/font.css')); ?>" rel='stylesheet' type='text/css'>
    <!-- Css files -->
    <!-- Icons -->
    <link href="<?php echo e(asset('assets/cms/css/icons.css')); ?>" rel="stylesheet" />
    <!-- Bootstrap stylesheets (included template modifications) -->
    <link href="<?php echo e(asset('assets/cms/css/bootstrap.css')); ?>" rel="stylesheet" />
    <!-- Plugins stylesheets (all plugin custom css) -->
    <link href="<?php echo e(asset('assets/cms/css/plugins.css')); ?>" rel="stylesheet" />
    <!-- Main stylesheets (template main css file) -->
    <link href="<?php echo e(asset('assets/cms/css/main.css')); ?>" rel="stylesheet" />
    <!-- Custom stylesheets ( Put your own changes here ) -->
    <link href="<?php echo e(asset('assets/cms/css/custom.css')); ?>" rel="stylesheet" />
    <!-- Windows8 touch icon ( http://www.buildmypinnedsite.com/ )-->
    <meta name="msapplication-TileColor" content="#3399cc" />
</head>
<body>
<!--[if lt IE 9]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<!-- .page-navbar -->
<?php echo $__env->make('cms.header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<!-- / page-navbar -->
<!-- #wrapper -->
<div id="wrapper">
    <!-- .page-sidebar -->
    <?php echo $__env->make('cms.sidebar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <!-- / page-sidebar -->
    <!-- Start #right-sidebar -->
    <?php echo $__env->make('cms.rightSidebar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <!-- End #right-sidebar -->
    <!-- .page-content -->
    <?php echo $__env->yieldContent('content'); ?>
    <!-- / page-content -->
</div>
<!-- / #wrapper -->
<?php echo $__env->make('cms.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<!-- End #footer  -->
<!-- Back to top -->
<div id="back-to-top"><a href="#">Back to Top</a>
</div>
<!-- Javascripts -->
<!-- Load pace first -->
<script src="<?php echo e(asset('assets/cms/plugins/core/pace/pace.min.js')); ?>"></script>
<!-- Important javascript libs(put in all pages) -->
<script src="<?php echo e(asset('assets/cms/js/jquery-2.1.1.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/js/jquery-ui.js')); ?>"></script>
<!--[if lt IE 9]>
<script type="text/javascript" src="<?php echo e(asset('assets/cms/js/libs/excanvas.min.js')); ?>"></script>
<script type="text/javascript" src="<?php echo e(asset('assets/cms/js/html5.js')); ?>"></script>
<script type="text/javascript" src="<?php echo e(asset('assets/cms/js/libs/respond.min.js')); ?>"></script>
<![endif]-->
<!-- Bootstrap plugins -->
<script src="<?php echo e(asset('assets/cms/js/bootstrap/bootstrap.js')); ?>"></script>
<!-- Core plugins ( not remove ) -->
<script src="<?php echo e(asset('assets/cms/js/libs/modernizr.custom.js')); ?>"></script>
<!-- Handle responsive view functions -->
<script src="<?php echo e(asset('assets/cms/js/jRespond.min.js')); ?>"></script>
<!-- Custom scroll for sidebars,tables and etc. -->
<script src="<?php echo e(asset('assets/cms/plugins/core/slimscroll/jquery.slimscroll.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/plugins/core/slimscroll/jquery.slimscroll.horizontal.min.js')); ?>"></script>
<!-- Remove click delay in touch -->
<script src="<?php echo e(asset('assets/cms/plugins/core/fastclick/fastclick.js')); ?>"></script>
<!-- Increase jquery animation speed -->
<script src="<?php echo e(asset('assets/cms/plugins/core/velocity/jquery.velocity.min.js')); ?>"></script>
<!-- Quick search plugin (fast search for many widgets) -->
<script src="<?php echo e(asset('assets/cms/plugins/core/quicksearch/jquery.quicksearch.js')); ?>"></script>
<!-- Bootbox fast bootstrap modals -->
<script src="<?php echo e(asset('assets/cms/plugins/ui/bootbox/bootbox.js')); ?>"></script>
<!-- Other plugins ( load only nessesary plugins for every page) -->
<script src="<?php echo e(asset('assets/cms/plugins/charts/sparklines/jquery.sparkline.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/js/jquery.dynamic.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/plugins/forms/bootstrap-timepicker/bootstrap-timepicker.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/plugins/forms/bootstrap-filestyle/bootstrap-filestyle.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/js/jquery.form.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/plugins/forms/spinner/jquery.bootstrap-touchspin.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/js/main.js')); ?>"></script>
<script src="<?php echo e(asset('assets/cms/js/pages/blank.js')); ?>"></script>

<?php echo $__env->yieldContent('scripts'); ?>
<script>
    $().ready(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        /*
        $.get('/cms/user/logs',function (data) {
            $('#userLogs').html(data);
        });
        */
        $('.side-nav .nav li ul li').each(function(){
            if( $(this).find('a').hasClass('active')){
                $(this).parent('ul').addClass('show');
                $(this).parent('ul').parent('li').find('a').eq(0).addClass('expand').addClass('active-state');
            }

        });
    })
</script>
</body>
</html>
