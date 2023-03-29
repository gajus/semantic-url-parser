# semantic-url-parser 🗂️

Extracts content information from known URL patterns.

```ts
import {
  extractContentInfoFromUrl,
} from 'semantic-url-parser';

extractContentInfoFromUrl('https://youtu.be/8Qn_spdM5Zg?t=5');

// {
//   content: 'VIDEO',
//   id: '8Qn_spdM5Zg',
//   site: 'YOUTUBE',
//   url: 'https://www.youtube.com/watch?v=8Qn_spdM5Zg'
// }

extractContentInfoFromUrl('https://soundcloud.com/strangehumman/kyoto-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing');

// {
//   content: 'TRACK',
//   id: 'kyoto-2',
//   username: 'strangehumman',
//   url: 'https://soundcloud.com/strangehumman/kyoto-2',
// }
```

## Supported Sites

* https://behance.net/
* https://canva.com/
* https://docs.google.com/
* https://drive.google.com/
* https://soundcloud.com/
* https://spotify.com/
* https://tiktok.com/
* https://twitter.com/
* https://vimeo.com/
* https://youtube.com/

## Adding New Sites

1. Update `SiteContentInfo`
1. Update `siteContentRules`
1. Update "Supported Sites" documentation