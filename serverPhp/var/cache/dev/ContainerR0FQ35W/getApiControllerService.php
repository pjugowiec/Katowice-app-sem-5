<?php

namespace ContainerR0FQ35W;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getApiControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\ApiController' shared autowired service.
     *
     * @return \App\Controller\ApiController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/src/Controller/ApiController.php';

        return $container->services['App\\Controller\\ApiController'] = new \App\Controller\ApiController();
    }
}
