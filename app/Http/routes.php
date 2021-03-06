<?php
Route::get('/', 'HomeController@index');
Route::post('info', 'HomeController@info');
Route::post('lottery', 'HomeController@lottery');
Route::get('/wx/share', function(){
    //$url = urldecode(Request::get('url'));
    $url = urlencode(Request::get('url'));
    $request_url = 'http://dev.maestro.com.cn/campaign/api/wechat/share.php?url='.$url;
    //var_dump($request_url);
    $result = json_decode(file_get_contents($request_url),true);
    $share = [
      'title' => env('WECHAT_SHARE_TITLE'),
      'desc' => env('WECHAT_SHARE_DESC'),
      'link' => env('APP_URL'),
      'imgUrl' => asset(env('WECHAT_SHARE_IMG')),
    ];
    return array_merge($share, $result);
    /*
    $url = urldecode(Request::get('url'));
    $options = [
      'app_id' => env('WECHAT_APPID'),
      'secret' => env('WECHAT_SECRET'),
      'token' => env('WECHAT_TOKEN')
    ];
    $wx = new EasyWeChat\Foundation\Application($options);
    $js = $wx->js;
    $js->setUrl($url);
    $config = json_decode($js->config(array('onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ'), false), true);
    $share = [
      'title' => env('WECHAT_SHARE_TITLE'),
      'desc' => env('WECHAT_SHARE_DESC'),
      'link' => env('APP_URL'),
      'imgUrl' => asset(env('WECHAT_SHARE_IMG')),
    ];
    return json_encode(array_merge($share, $config));
    */
});
Route::get('logout',function(){
    Request::session()->set('wechat.openid',null);
    return redirect('/');
});
Route::get('login',function(){
    Request::session()->set('wechat.openid','o2-sBj0oOQJCIq6yR7I9HtrqxZcY');
    return redirect('/');
});
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//Route::auth();
//Route::get('/register', 'Auth\AuthController@getRegister');
//Route::post('/register', 'Auth\AuthController@postRegister');

//Route::get('/home', 'HomeController@index');


Route::get('/admin/login', 'Admin\AuthController@getLogin');
Route::post('/admin/login', 'Admin\AuthController@postLogin');
Route::any('/admin/logout', function(){
    Auth::guard('admin')->logout();
    return redirect('/admin/login');
});

//抽奖部分管理
//wechat auth
Route::any('/wechat/auth', 'WechatController@auth');
Route::any('/wechat/callback', 'WechatController@callback');

Route::group(['middleware' => ['auth:admin','menu']], function () {
    Route::get('admin', 'CmsController@index')->name('admin_dashboard');
    Route::get('admin/users', 'CmsController@users');
    Route::get('admin/account', 'CmsController@account');
    Route::post('admin/account', 'CmsController@accountPost');
    Route::get('admin/wechat', 'CmsController@wechat');
    Route::get('admin/user/logs', 'CmsController@userLogs');
    Route::get('admin/export', 'CmsController@export');
    Route::get('admin/photos', 'CmsController@photos');
    Route::get('admin/photos/export', 'CmsController@photosExport');
    Route::get('admin/sessions', 'CmsController@sessions');
    Route::get('admin/session/{id}', 'CmsController@sessions');
    Route::get('admin/lotteries', 'CmsLotteryController@lotteries');
    Route::get('admin/prizes', 'CmsLotteryController@prizes');
    Route::post('admin/prize/update/{id}', 'CmsLotteryController@prizeUpdate');//
    Route::get('admin/lottery/configs', 'CmsLotteryController@lotteryConfigs');
    Route::post('admin/lottery/config/update/{id}', 'CmsLotteryController@lotteryConfigUpdate');
    Route::post('admin/lottery/config/add', 'CmsLotteryController@lotteryConfigAdd');
    Route::get('admin/prize/configs', 'CmsLotteryController@prizeConfigs');
    Route::get('admin/prize/config/update/{id}', 'CmsLotteryController@prizeConfig');
    Route::post('admin/prize/config/update/{id}', 'CmsLotteryController@prizeConfigUpdate');
    Route::get('admin/prize/config/add', 'CmsLotteryController@prizeConfigAdd');
    Route::post('admin/prize/config/add', 'CmsLotteryController@prizeConfigStore');
    Route::get('admin/prize/codes', 'CmsLotteryController@prizeCodes');
});
//初始化后台帐号
Route::get('admin/install', function () {
    if (0 == \App\Admin::count()) {
        $user = new \App\Admin();
        $user->name = 'admin';
        $user->email = 'admin@admin.com';
        $user->password = bcrypt('admin@2016');
        $user->save();
    }
    return redirect('admin/login');
});
