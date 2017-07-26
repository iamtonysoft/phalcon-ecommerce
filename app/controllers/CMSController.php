<?php

class CMSController extends \Phalcon\Mvc\Controller
{
    public function indexAction()
    {
        $this->assets->addCss("css/cms.css");
    }
}

