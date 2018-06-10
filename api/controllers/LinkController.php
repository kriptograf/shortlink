<?php
/**
 * Created by PhpStorm.
 * User: foreach
 * Date: 28.05.18
 * Time: 21:28
 */

namespace app\controllers;

use Yii;

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
        return [
            'data' => Yii::$app->user->identity,
        ];
    }

    public function actionCreate()
    {
        return [
            'data'=>$_POST,
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