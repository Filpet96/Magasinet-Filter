<?php
declare(strict_types=1);
add_action('init', function () {
    register_taxonomy('politician', ['quiz'], [
        'hierarchical' => true,
        'labels' => [
            'add_new_item' => __('Add New Politician'),
            'edit_item' => __('Edit Politician'),
            'name' => __('Politicians'),
            'search_items' => __('Search Politician'),
            'singular_name' => __('Politician'),
        ],
        'query_var' => true,
        'rewrite' => ['slug' => 'tag'],
        'show_admin_column' => true,
        'show_ui' => true,
    ]);
});
