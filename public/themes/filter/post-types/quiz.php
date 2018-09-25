<?php
declare(strict_types=1);
add_action('init', function () {
    register_post_type('quiz', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add Question'),
            'edit_item' => __('Edit Question'),
            'name' => __('Quiz'),
            'search_items' => __('Search Question'),
            'singular_name' => __('Quiz'),
        ],
        'menu_icon' => 'dashicons-clipboard',
        'menu_position' => 20,
        'public' => true,
    ]);
});
