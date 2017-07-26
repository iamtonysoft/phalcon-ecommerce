<?php

class CMSController extends \Phalcon\Mvc\Controller
{
    public function indexAction()
    {
        $headerCollection = $this->assets->collection('header');
        $headerCollection->addCss('css/cms.min.css');

        $footerCollection = $this->assets->collection('footer');
        $footerCollection->addJs('js/common.bundle.js');
        $footerCollection->addJs('js/cms.bundle.js');
    }
}

