<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\DataTransferObjects\ProjectDTO;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   

        $projects = DB::table('laravel.projects')
                ->join('laravel.localizations', 'projects.localization_id', '=', 'localizations.id')
                ->select('projects.*', 'localizations.*')
                ->get();

                $test = Project::join('localizations', 'projects.localization_id', '=', 'localizations.id')
                ->get(['projects.*', 'localizations.*']);

                $Test2 = new ProjectDTO([
                    'id' => '…',
                    'name' => '…',
                    'description' => '…',
                ]);
        
        return $test;
    }

    /** 
     * Display the specified resource. 
     * 
     * @param  int  $id 
     * @return \Illuminate\Http\Response 
     */
    public function show($id)
    {
        return Project::find($id);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $project = Project::create($request->all());

        return response()->json($project, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([  
            'name'=>'required',  
            'description'=>'required'
        ]);  

        $project = Project::find($id);
        $project->name =  $request->get('name');  
        $project->description = $request->get('description');  

        $project->save();

        return response()->json($project, 200);

    }

    public function delete($id)
    {
        Project::destroy($id);

        return response()->json(null, 204);
    }
}
