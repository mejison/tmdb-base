<?php

return [
    [
        'property' => 'og:url',
        'content' => '{{url.watch}}',
    ],
    [
        'property' => 'og:title',
        'content' => '{{title.name}}} - {{video.name}} - {{site_name}}',
    ],
    [
        'property' => 'og:description',
        'content' => 'Watch {{video.name}} on {{site_name}}',
    ],
    [
        'property' => 'og:type',
        'content' => 'video.other',
    ],
    [
        'property' => 'og:image',
        'content' => '{{video.thumbnail ?: title.backdrop}}',
    ],
    [
        'property' => 'og:image:width',
        'content' => '1280',
    ],
    [
        'property' => 'og:image:height',
        'content' => '720',
    ],
    [
        'nodeName' => 'script',
        'type' => 'application/ld+json',
        '_text' => [
            '@context' => 'http://schema.org',
            '@type' => 'VideoObject',
            '@id' => '{{url.watch}}',
            'url' => '{{url.watch}}',
            'name' => '{{title.name}} - {{video.name}} | {{site_name}}',
            'thumbnail' => [
                '@type' => 'ImageObject',
                'contentUrl' => '{{video.thumbnail ?: title.backdrop}}',
            ],
            'thumbnailUrl' => '{{video.thumbnail ?: title.backdrop}}',
            'description' => '{{title.description}}',
            'uploadDate' => '{{video.release_date}}',
        ],
    ],
];
