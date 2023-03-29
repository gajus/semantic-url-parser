// cspell:disable

export type SiteContentInfo = {
  SOUNDCLOUD_TRACK: {
    contentType: 'TRACK';
    site: 'SOUNDCLOUD';
    trackId: string;
    url: string;
    username: string;
  };
  TIKTOK_PROFILE: {
    contentType: 'PROFILE';
    site: 'TIKTOK';
    url: string;
    username: string;
  };
  TIKTOK_VIDEO: {
    contentType: 'VIDEO';
    site: 'TIKTOK';
    url: string;
    username: string;
    videoId: string;
  };
  TWITTER_PROFILE: {
    contentType: 'PROFILE';
    site: 'TWITTER';
    url: string;
    username: string;
  };
  TWITTER_STATUS: {
    contentType: 'STATUS';
    site: 'TWITTER';
    statusId: string;
    url: string;
    username: string;
  };
  YOUTUBE_SHORT_VIDEO: {
    contentType: 'SHORT_VIDEO';
    site: 'YOUTUBE';
    url: string;
    videoId: string;
  };
  YOUTUBE_VIDEO: {
    contentType: 'VIDEO';
    site: 'YOUTUBE';
    url: string;
    videoId: string;
  };
};

type SiteContentInfoExtractor<T> = (
  url: URL,
  searchParameters: URLSearchParams,
) => T | null;

type SiteRule<T extends SiteContentInfo[keyof SiteContentInfo]> = {
  contentType: T['contentType'];
  domain: string;
  extractContentInfo: SiteContentInfoExtractor<
    Omit<Omit<T, 'contentType'>, 'site'>
  >;
  site: T['site'];
  tests: Record<string, Omit<Omit<T, 'contentType'>, 'site'>>;
  weight: number;
};

type ExtractedInfo<T extends string> = {
  [K in T]: string;
};

const createIdFromSearchParameterContentExtractor = <T extends string>(
  idName: T,
  searchParameterName: string,
  urlTemplate: string,
): SiteContentInfoExtractor<ExtractedInfo<T> & { url: string }> => {
  return (url, searchParameters) => {
    const id = searchParameters.get(searchParameterName);

    if (typeof id === 'string' && id) {
      return {
        [idName]: id,
        url: urlTemplate.replace('{{' + idName + '}}', id),
      } as ExtractedInfo<T> & { url: string };
    }

    return null;
  };
};

const createIdFromFirstPathnameRegexMatchContentInfoExtractor = <
  T extends string,
>(
  idName: T,
  regex: RegExp,
  urlTemplate: string,
): SiteContentInfoExtractor<ExtractedInfo<T> & { url: string }> => {
  return (url) => {
    const id = regex.exec(url.pathname)?.[1];

    if (id) {
      return {
        [idName]: id,
        url: urlTemplate.replace('{{' + idName + '}}', id),
      } as ExtractedInfo<T> & { url: string };
    }

    return null;
  };
};

export const siteContentRules: {
  [K in keyof SiteContentInfo]: SiteRule<SiteContentInfo[K]>;
} = {
  SOUNDCLOUD_TRACK: {
    contentType: 'TRACK',
    domain: 'soundcloud.com',
    extractContentInfo: (url) => {
      const [, username, trackId] =
        /([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && trackId) {
        return {
          trackId,
          url: 'https://soundcloud.com/' + username + '/' + trackId,
          username,
        };
      }

      return null;
    },
    site: 'SOUNDCLOUD',
    tests: {
      'https://soundcloud.com/strangehumman/kyoto-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing':
        {
          trackId: 'kyoto-2',
          url: 'https://soundcloud.com/strangehumman/kyoto-2',
          username: 'strangehumman',
        },
    },
    weight: 100,
  },
  TIKTOK_PROFILE: {
    contentType: 'PROFILE',
    domain: 'tiktok.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/@([\w.]+)/u,
      'https://tiktok.com/@{{username}}',
    ),
    site: 'TIKTOK',
    tests: {
      'https://www.tiktok.com/@fncischen?lang=en': {
        url: 'https://tiktok.com/@fncischen',
        username: 'fncischen',
      },
      'https://www.tiktok.com/@foo.bar': {
        url: 'https://tiktok.com/@foo.bar',
        username: 'foo.bar',
      },
    },
    weight: 100,
  },
  TIKTOK_VIDEO: {
    contentType: 'VIDEO',
    domain: 'tiktok.com',
    extractContentInfo: (url) => {
      const [, username, videoId] =
        /^\/@([\w.]+)\/video\/(\d+)/u.exec(url.pathname) ?? [];

      if (username && videoId) {
        return {
          url: 'https://tiktok.com/@' + username + '/video/' + videoId,
          username,
          videoId,
        };
      }

      return null;
    },
    site: 'TIKTOK',
    tests: {
      'https://www.tiktok.com/@fncischen/video/7020257482249374981?is_copy_url=1&is_from_webapp=v1':
        {
          url: 'https://tiktok.com/@fncischen/video/7020257482249374981',
          username: 'fncischen',
          videoId: '7020257482249374981',
        },
      'https://www.tiktok.com/@foo.bar/video/7020257482249374981': {
        url: 'https://tiktok.com/@foo.bar/video/7020257482249374981',
        username: 'foo.bar',
        videoId: '7020257482249374981',
      },
    },
    weight: 90,
  },
  TWITTER_PROFILE: {
    contentType: 'PROFILE',
    domain: 'twitter.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/([\w-]+)/u,
      'https://twitter.com/{{username}}',
    ),
    site: 'TWITTER',
    tests: {
      'https://twitter.com/gajus': {
        url: 'https://twitter.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  TWITTER_STATUS: {
    contentType: 'STATUS',
    domain: 'twitter.com',
    extractContentInfo: (url) => {
      const [, username, statusId] =
        /^\/(\w+)\/status\/(\d+)/u.exec(url.pathname) ?? [];

      if (username && statusId) {
        return {
          statusId,
          url: 'https://twitter.com/' + username + '/status/' + statusId,
          username,
        };
      }

      return null;
    },
    site: 'TWITTER',
    tests: {
      'https://twitter.com/kuizinas/status/1640770515114532872': {
        statusId: '1640770515114532872',
        url: 'https://twitter.com/kuizinas/status/1640770515114532872',
        username: 'kuizinas',
      },
    },
    weight: 90,
  },
  YOUTUBE_SHORT_VIDEO: {
    contentType: 'SHORT_VIDEO',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/shorts\/([\w-]+)/u,
      'https://youtube.com/shorts/{{videoId}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://youtube.com/shorts/wrBGTNMBkWc?feature=share': {
        url: 'https://youtube.com/shorts/wrBGTNMBkWc',
        videoId: 'wrBGTNMBkWc',
      },
    },
    weight: 100,
  },
  YOUTUBE_VIDEO: {
    contentType: 'VIDEO',
    domain: 'youtube.com',
    extractContentInfo: createIdFromSearchParameterContentExtractor(
      'videoId',
      'v',
      'https://www.youtube.com/watch?v={{videoId}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://www.youtube.com/watch?v=5yrlJbeUgCc&ab_channel=EasyPeasyForTutorials':
        {
          url: 'https://www.youtube.com/watch?v=5yrlJbeUgCc',
          videoId: '5yrlJbeUgCc',
        },
      'https://www.youtube.com/watch?v=wE9vSGvzSHg': {
        url: 'https://www.youtube.com/watch?v=wE9vSGvzSHg',
        videoId: 'wE9vSGvzSHg',
      },
    },
    weight: 100,
  },
};
