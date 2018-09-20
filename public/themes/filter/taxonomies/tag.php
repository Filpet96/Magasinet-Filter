<?php
declare(strict_types=1);
add_action('init', function () {
    register_taxonomy('tag', ['article'], [
        'hierarchical' => true,
        'labels' => [
            'add_new_item' => __('Add New Tag'),
            'edit_item' => __('Edit Tag'),
            'name' => __('Tags'),
            'search_items' => __('Search Tags'),
            'singular_name' => __('Tag'),
        ],
        'query_var' => true,
        'rewrite' => ['slug' => 'tag'],
        'show_admin_column' => true,
        'show_ui' => true,
    ]);
});
