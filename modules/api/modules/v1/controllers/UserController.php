<?php

namespace app\modules\api\modules\v1\controllers;

use app\models\SignupForm;
use yii\rest\Controller;

/**
 * Default controller for the `v1` module
 */
class UserController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex()
    {
        return [
            'success'=>true,
            'message'=>'This default/index'
        ];
    }

    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }

        $model->password = '';
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    /**
     * Logout action.
     *
     * @return Response
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }


    public function actionSignup()
    {
        $model = new SignupForm();
        return Yii::$app->request->post();
        if ($model->load(Yii::$app->request->post())) {
            return Yii::$app->request->post();
            //return $model;
            /*if ($user = $model->signup()) {
                if (Yii::$app->getUser()->login($user)) {
                    return $this->goHome();
                }
            }*/
        }
    }
}
