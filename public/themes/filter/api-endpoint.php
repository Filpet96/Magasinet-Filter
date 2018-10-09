<?php

// Get All Articles
add_action('rest_api_init', function () {
    register_rest_route('filter/', '/articles/', array(
    'methods' => 'GET',
    'callback' => 'getAllArticles',
  ));
});

function getAllArticles()
{
    $articles = get_posts([
      'post_type' => 'article',
      'numberposts' => -1,
  ]);

    foreach ($articles as $article) {
        $customFields = get_fields($article);
        $tags = get_the_terms($article, 'tag');
        foreach ($customFields as $field => $value) {
            $article->$field = $value;
        }
        $article->tags = $tags;
    }

    return $articles;
}

// Get All quiz
add_action('rest_api_init', function () {
    register_rest_route('filter', '/quiz/', array(
    'methods' => 'GET',
    'callback' => 'getQuiz',
  ));
});

function getQuiz()
{
    $quiz = get_posts([
      'post_type' => 'quiz',
      'numberposts' => -1,
  ]);
    $politicians = getPoliticians();

    foreach ($quiz as $single_quiz) {
        $customFields = get_fields($single_quiz);
        foreach ($customFields as $field => $value) {
            $single_quiz->$field = $value;
        }
        $single_quiz->politicians = $politicians;
    }

    return $quiz;
}

// Get All Politicians
function getPoliticians()
{
    $politicians = get_terms(array(
    'taxonomy' => 'politician',
    'hide_empty' => false,
));

    foreach ($politicians as $politician) {
        $customFields = get_fields($politician);
        foreach ($customFields as $field => $value) {
            $politician->$field = $value;
        }
    }

    return $politicians;
}

add_action('rest_api_init', function () {
    register_rest_route('filter', '/quiz/politicians/', array(
    'methods' => 'GET',
    'callback' => 'getPoliticians',
  ));
});

// Get Article By Id

add_action('rest_api_init', function () {
    register_rest_route('filter', '/article/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'getArticleById',
  ));
});

function getArticleById($data)
{
    $articles = getAllArticles();

    foreach ($articles as $article) {
        if ($article->ID == $data['id']) {
            return $article;
        } else {
            $article = null;
        }
    }
}

// Get Quiz By Id

add_action('rest_api_init', function () {
    register_rest_route('filter', '/quiz/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'getQuizById',
  ));
});

function getQuizById($data)
{
    $quiz = getQuiz();
    foreach ($quiz as $single_quiz) {
        if ($single_quiz->ID == $data['id']) {
            $quiz = $single_quiz;
        } else {
            $quiz = null;
        }
    }
    return $quiz;
}


// Get Articles By Tag

add_action('rest_api_init', function () {
    register_rest_route('filter', '/articles/tag/(?P<tag>\S+)/', array(
    'methods' => 'GET',
    'callback' => 'getArticlesByTag',
  ));
});


function getArticlesByTag($data)
{
    $articlesByTag = null;
    $articles = getAllArticles();

    foreach ($articles as $article) {
        foreach ($article->tags as $tag) {
            if ($tag->slug == $data['tag']) {
                $articlesByTag[] = $article;
            }
        }
    }
    return $articlesByTag;
}
