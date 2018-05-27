<?php

use yii\db\Migration;

/**
 * Handles the creation of table `link`.
 */
class m180527_150213_create_link_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('link', [
            'id' => $this->primaryKey(),
            'user_id'=> $this->integer(11)->notNull(),
            'link'=>$this->string(255)->notNull(),
            'original_link'=>$this->text()->notNull(),
            'count_usage'=>$this->integer(11),
            'created_at'=>$this->date(),
        ]);

        $this->createIndex('idx_user_user_id', 'link', 'user_id');
        $this->addForeignKey('fk_user_user_id', 'link', 'user_id', 'user', 'id', 'CASCADE');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('link');
    }
}
