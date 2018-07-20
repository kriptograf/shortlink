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

use yii\rest\Controller;
use app\models\SignupForm;
use app\models\LoginForm;

use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;

class UserController extends Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
            'only' => ['index', 'logout', 'profile'],
            'except' => ['login','signup']
        ];
        return $behaviors;
    }

    /**
     * @todo ограничить вывод иныормации о пользователе
     * @todo добавить ссылки пользователя, сформировать ответ
     * @todo сделать вывод на фронтенде
     * @return array
     */
    public function actionIndex()
    {

        /*$data = [];
        $data['name'] = $user->username;
        $data['email'] = $user->email;*/

        return [
            'data' => Yii::$app->user->identity,
        ];
    }

    public function actionLogin()
    {
        $data = [];
        $meta = [];

        if (!Yii::$app->user->isGuest) {
            $user = Yii::$app->user->identity;
            $data['name'] = $user->username;
            $meta['token'] = $user->getAuthKey();

            return [
                'data' => $data,
                'meta' => $meta
            ];
        }

        $model = new LoginForm();
        if (Yii::$app->request->post()) {
            $model->username = Yii::$app->request->post('username');
            $model->password = Yii::$app->request->post('password');
            if($model->login()){

                $data['name'] = $model->user->username;
                $meta['token'] = $model->user->getAuthKey();

                return [
                    'data' => $data,
                    'meta' => $meta
                ];
            }
            return [
                'error' => 'Could not authenticate',
            ];
        }

        $model->password = '';
        return [
            'login'=>'login'
        ];
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    public function actionSignup()
    {
        $model = new SignupForm();
        if (Yii::$app->request->post()) {
            $model->username = Yii::$app->request->post('name');
            $model->email = Yii::$app->request->post('email');
            $model->password = Yii::$app->request->post('password');

            if ($user = $model->signup()) {
                if (Yii::$app->getUser()->login($user)) {
                    $data = [];
                    $meta = [];

                    $data['name'] = $user->username;
                    $meta['token'] = $user->getAuthKey();

                    return [
                        'data' => $data,
                        'meta' => $meta
                    ];
                }
            }
        }

    }
}