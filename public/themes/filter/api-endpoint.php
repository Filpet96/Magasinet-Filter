<?php
add_action( 'rest_api_init', function () {
  register_rest_route( 'filter/', '/articles/', array(
    'methods' => 'GET',
    'callback' => 'getAllArticles',
  ) );
} );

add_action( 'rest_api_init', function () {
  register_rest_route( 'filter', '/article/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'getArticleById',
  ) );
} );


add_action( 'rest_api_init', function () {
  register_rest_route( 'filter', '/quiz/', array(
    'methods' => 'GET',
    'callback' => 'getQuiz',
  ) );
} );

add_action( 'rest_api_init', function () {
  register_rest_route( 'filter', '/quiz/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'getQuizById',
  ) );
} );

add_action( 'rest_api_init', function () {
  register_rest_route( 'filter', '/quiz/politicians/', array(
    'methods' => 'GET',
    'callback' => 'getPoliticians',
  ) );
} );




function getPoliticians() {
  $politicians = get_terms( array(
    'taxonomy' => 'politician',
    'hide_empty' => false,
) );

foreach ($politicians as $politician) {
  $customFields = get_fields($politician);
  foreach ($customFields as $field => $value) {
      $politician->$field = $value;
  }
}

  return $politicians;
}

function getQuiz() {
  $quiz = get_posts([
      'post_type' => 'quiz',
      'numberposts' => -1,
  ]);
  $politicians = get_terms( array(
    'taxonomy' => 'politician',
    'hide_empty' => false,
  ) );

  foreach ($quiz as $single_quiz) {
    $customFields = get_fields($single_quiz);
    foreach ($customFields as $field => $value) {
        $single_quiz->$field = $value;
    }
    foreach ($politicians as $politician) {
      $customFields = get_fields($politician);
      foreach ($customFields as $field => $value) {
          $politician->$field = $value;
      }
    }
    $single_quiz->politicians = $politicians;
}

  return $quiz;
}

function getAllArticles() {
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


function getQuizById($data) {
  $quiz = get_posts([
      'post_type' => 'quiz',
      'numberposts' => -1,
  ]);
  $politicians = get_terms( array(
    'taxonomy' => 'politician',
    'hide_empty' => false,
  ) );


  foreach ($quiz as $single_quiz) {
    if ($single_quiz->ID == $data['id']) {
    $customFields = get_fields($single_quiz);
    foreach ($customFields as $field => $value) {
        $single_quiz->$field = $value;
    }
    foreach ($politicians as $politician) {
      $customFields = get_fields($politician);
      foreach ($customFields as $field => $value) {
          $politician->$field = $value;
      }
    }
    $single_quiz->politicians = $politicians;
  } else {
    $quiz = null;
  }
}

  return $quiz[0];
}


function getArticleById($data) {
  $articles = get_posts([
      'post_type' => 'article',
      'numberposts' => -1,
  ]);

  foreach ($articles as $article) {
    if ($article->ID == $data['id']) {
      $customFields = get_fields($article);
      $tags = get_the_terms($article, 'tag');
      foreach ($customFields as $field => $value) {
          $article->$field = $value;
      }
      $article->tags = $tags;
      return $article;
    } else {
      $article = null;
    }
    }
}

// Get article by tag
add_action( 'rest_api_init', function () {
  register_rest_route( 'filter', '/article/tag/(?P<tag>\w+)/', array(
    'methods' => 'GET',
    'callback' => 'getArticleByTag',
  ) );
} );


function getArticleByTag($data) {
  $articlesByTag = null;
  $articles = get_posts([
      'post_type' => 'article',
      'numberposts' => -1,
  ]);


  foreach ($articles as $article) {
    $tags = get_the_terms($article, 'tag');
    $customFields = get_fields($article);
    foreach ($customFields as $field => $value) {
        $article->$field = $value;
    }

    foreach ($tags as $tag) {
    if ($tag->slug == $data['tag']) {
      $articlesByTag[] = $article;
    }
    }
  }


  return $articlesByTag;
}
