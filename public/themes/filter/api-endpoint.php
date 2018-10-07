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
