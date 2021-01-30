<?php


namespace App\Controller;


use App\Entity\Project;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProjectController extends AbstractController
{
    public function getAllProjects(Request $request): Response {

        $projects = $this->getDoctrine()->getRepository(Project::class)->findAll();
        return $this->json($projects);
    }
}