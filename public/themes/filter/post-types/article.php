<?php
declare(strict_types=1);
add_action('init', function () {
    register_post_type('article', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add Article'),
            'edit_item' => __('Edit Article'),
            'name' => __('Articles'),
            'search_items' => __('Search Articles'),
            'singular_name' => __('Article'),
        ],
        'menu_icon' => 'dashicons-id-alt',
        'menu_position' => 20,
        'public' => true,
    ]);
});
