<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AccountController extends Controller
{
    public function getToken(){
        $response = Http::post('https://id.twitch.tv/oauth2/token',[
            'client_id' => '2n9u9j32o07bqgpgkyakmgy7hjdbsw',
            'client_secret' => 'zv1tr3kwr0opr9d2h2htdsh79c0opu',
            'grant_type' => 'client_credentials',
        ]);
        return $response->object()->access_token;
    }

    public function getProfile(){
        $token = $this->getToken();
        $response = Http::withHeaders([
            'Authorization' => 'Bearer '.$token,
            'Client-Id' => '2n9u9j32o07bqgpgkyakmgy7hjdbsw',
        ])->get('https://api.twitch.tv/helix/users?login=chunghv');
        return $response;
    }
}
