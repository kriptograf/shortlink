<?php
/**
 * Created by PhpStorm.
 * User: foreach
 * Date: 28.05.18
 * Time: 21:28
 */

namespace app\controllers;

use app\models\Link;
use Yii;

use yii\helpers\Html;
use yii\helpers\Json;
use yii\helpers\Url;
use yii\rest\Controller;
use app\models\SignupForm;
use app\models\LoginForm;

use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;

class LinkController extends Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
            'only' => ['index', 'create', 'update', 'delete'],
            'except' => ['view']
        ];
        return $behaviors;
    }

    public function actionIndex()
    {
        $result = [];
        $links = Link::find()->where(['user_id'=>Yii::$app->user->id])->all();
        foreach ($links as $k => $link) {
            $result[$k]['OriginalUrl'] = $link->original_link;
            $result[$k]['ShortUrl'] = Url::to($link->link, true);
            $result[$k]['actions'] = '<a href="#">Delete</a>';
        }
        return [
            'data' => Yii::$app->user->identity,
            'links'=>$result
        ];
    }

    public function actionCreate()
    {
        $result = [];
        $url = Yii::$app->request->post('url');
        if($url){
            $shortUrl = Link::checkExistLinkByUrl($url);
            if($shortUrl){
                $result['link'] = Url::to($shortUrl, true);
                $result['orig'] = $url;
            }else{
                $result['link'] = null;
                $result['error'] = 'Not created link';
            }
        }
        return [
            'data'=>$result,
            'user'=>Yii::$app->user->identity,
        ];
    }

    public function actionUpdate($id)
    {

    }

    public function actionDelete($id)
    {

    }

    public function actionView($id)
    {

    }
}