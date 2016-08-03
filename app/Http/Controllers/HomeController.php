<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Helper;
use Session;
use App;
use Carbon\Carbon;
class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('web');
        //$this->middleware('wechat.auth');
    }

    public function index()
    {

        return view('index');
    }
    public function lottery()
    {
        $result = ['ret' => 0, 'prize' => [], 'msg' => ''];
        $lottery = new Helper\Lottery();
        $lottery->run();
        //$prize_code = $lottery->getCode();
        $prize_id = $lottery->getPrizeId();
        $result['prize'] = $prize_id;
        //$result['prize']['code'] = $prize_code;

        return json_encode($result);
    }
    public function info(Request $request)
    {
        if( null == Session::get('lottery.id')){
            return ['ret'=>1001,'msg'=>'您还没有抽奖呢'];
        }
        else{
            $lottery = App\Lottery::findOrFail(Session::get('lottery.id'));
            $count = App\Info::where('mobile',trim($request->input('mobile')))->count();
            if( $lottery->prize_id == null){
                return ['ret'=>1002,'msg'=>'你还没有中奖呢'];
            }
            elseif($count>0){
                return ['ret'=>1003,'msg'=>'该手机号已经使用过了~'];
            }
            else{
                $data = [
                    'id' => Session::get('lottery.id'),
                    'name' => trim($request->input('name')),
                    'mobile' => trim($request->input('mobile')),
                    'address' => trim($request->input('address')),
                    'ip_address' => \Request::getClientIp(),
                ];
                $info = App\Info::firstOrCreate($data);
                Session::set('lottery.id',null);
                return ['ret'=>0,'msg'=>''];
            }
        }
    }
}
