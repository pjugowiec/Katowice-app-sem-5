<?php

namespace App\DataTransferObjects;

use Spatie\DataTransferObject\DataTransferObject;

class ProjectDTO extends DataTransferObject
{
    public int $id;

    public string $name;

    public string $description;
}
