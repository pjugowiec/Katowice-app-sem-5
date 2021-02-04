<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/api/localization' => [
            [['_route' => 'app_localization_getalllocalizations', '_controller' => 'App\\Controller\\LocalizationController::getAllLocalizations'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'app_localization_createlocalization', '_controller' => 'App\\Controller\\LocalizationController::createLocalization'], null, ['POST' => 0], null, false, false, null],
            [['_route' => 'getAllLocalizations', '_controller' => 'App\\Controller\\LocalizationController::getAllLocalizations'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'createLocalization', '_controller' => 'App\\Controller\\LocalizationController::createLocalization'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/project' => [
            [['_route' => 'getAllProjects', '_controller' => 'App\\Controller\\ProjectController::getAllProjects'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'createProject', '_controller' => 'App\\Controller\\ProjectController::createProject'], null, ['POST' => 0], null, false, false, null],
        ],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/api/(?'
                    .'|project/([^/]++)(?'
                        .'|(*:196)'
                    .')'
                    .'|localization/([^/]++)(?'
                        .'|(*:229)'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        196 => [
            [['_route' => 'updateProject', '_controller' => 'App\\Controller\\ProjectController::updateProject'], ['id'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'deleteProject', '_controller' => 'App\\Controller\\ProjectController::deleteProject'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        229 => [
            [['_route' => 'deleteLocalization', '_controller' => 'App\\Controller\\LocalizationController::deleteLocalization'], ['id'], ['DELETE' => 0], null, false, true, null],
            [['_route' => 'updateLocalization', '_controller' => 'App\\Controller\\LocalizationController::updateLocalization'], ['id'], ['PUT' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
