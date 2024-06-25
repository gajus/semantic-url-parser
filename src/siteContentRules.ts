// cspell:disable

export type SiteContentInfo = {
  'APPLE_APPS.APP.DEFAULT': {
    appId: string;
    contentType: 'APP';
    site: 'APPLE_APPS';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'APPLE_MUSIC.ALBUM.DEFAULT': {
    albumId: string;
    contentType: 'ALBUM';
    site: 'APPLE_MUSIC';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'APPLE_MUSIC.ARTIST.DEFAULT': {
    artistId: string;
    contentType: 'ARTIST';
    site: 'APPLE_MUSIC';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'BEHANCE.GALLERY.DEFAULT': {
    contentType: 'GALLERY';
    galleryId: string;
    site: 'BEHANCE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'BEHANCE.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'BEHANCE';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'CANVA.DESIGN.DEFAULT': {
    contentType: 'DESIGN';
    designId: string;
    site: 'CANVA';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'CODEPEN.PEN.DEFAULT': {
    contentType: 'PEN';
    penId: string;
    site: 'CODEPEN';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'CODESANDBOX.DEVBOX.DEFAULT': {
    contentType: 'DEVBOX';
    sandboxId: string;
    site: 'CODESANDBOX';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'CODESANDBOX.SANDBOX.DEFAULT': {
    contentType: 'SANDBOX';
    sandboxId: string;
    site: 'CODESANDBOX';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'DESCRIPT.PROJECT.DEFAULT': {
    contentType: 'PROJECT';
    projectId: string;
    site: 'DESCRIPT';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'DRIBBBLE.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'DRIBBBLE';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'DRIBBBLE.SHOT.DEFAULT': {
    contentType: 'SHOT';
    shotId: string;
    site: 'DRIBBBLE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'DROPBOX.FILE.DEFAULT': {
    contentType: 'FILE';
    fileId: string;
    site: 'DROPBOX';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'FACEBOOK.POST.DEFAULT': {
    contentType: 'POST';
    postId: string;
    site: 'FACEBOOK';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'FIGMA.BOARD.DEFAULT': {
    boardId: string;
    contentType: 'BOARD';
    site: 'FIGMA';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'FIGMA.DESIGN.DEFAULT': {
    contentType: 'DESIGN';
    designId: string;
    site: 'FIGMA';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'FIGMA.FILE.DEFAULT': {
    contentType: 'FILE';
    fileId: string;
    site: 'FIGMA';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'FIGMA.PROTOTYPE.DEFAULT': {
    contentType: 'PROTOTYPE';
    prototypeId: string;
    site: 'FIGMA';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'FIVERR.GIG.DEFAULT': {
    contentType: 'GIG';
    gigId: string;
    site: 'FIVERR';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'FIVERR.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'FIVERR';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'GITHUB.GIST.DEFAULT': {
    contentType: 'GIST';
    gistId: string;
    site: 'GITHUB';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'GITHUB.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'GITHUB';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'GITHUB.REPOSITORY.DEFAULT': {
    contentType: 'REPOSITORY';
    repositoryName: string;
    site: 'GITHUB';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'GOOGLE_DOCS.DOCUMENT.DEFAULT': {
    contentType: 'DOCUMENT';
    documentId: string;
    site: 'GOOGLE_DOCS';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'GOOGLE_DOCS.PRESENTATION.DEFAULT': {
    contentType: 'PRESENTATION';
    presentationId: string;
    site: 'GOOGLE_DOCS';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'GOOGLE_DOCS.SPREADSHEET.DEFAULT': {
    contentType: 'SPREADSHEET';
    site: 'GOOGLE_DOCS';
    spreadsheetId: string;
    url: string;
    urlVariant: 'DEFAULT';
  };
  'GOOGLE_DRIVE.FILE.DEFAULT': {
    contentType: 'FILE';
    fileId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'GOOGLE_DRIVE.FOLDER.DEFAULT': {
    contentType: 'FOLDER';
    folderId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'GOOGLE_DRIVE.FOLDERS.DEFAULT': {
    contentType: 'FOLDER';
    folderId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'GOOGLE_DRIVE.FOLDERVIEW.DEFAULT': {
    contentType: 'FOLDER';
    folderId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'GOOGLE_PLAY.APP.DEFAULT': {
    appId: string;
    contentType: 'APP';
    site: 'GOOGLE_PLAY';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'INSTAGRAM.POST.DEFAULT': {
    contentType: 'POST';
    postId: string;
    site: 'INSTAGRAM';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'INSTAGRAM.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'INSTAGRAM';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'INSTAGRAM.REEL.DEFAULT': {
    contentType: 'REEL';
    reelId: string;
    site: 'INSTAGRAM';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'LINKEDIN.FEED_POST.DEFAULT': {
    contentType: 'FEED_POST';
    postId: string;
    site: 'LINKEDIN';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'LINKEDIN.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    profileId: string;
    site: 'LINKEDIN';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'LINKTREE.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'LINKTREE';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'LOOM.VIDEO.DEFAULT': {
    contentType: 'VIDEO';
    site: 'LOOM';
    url: string;
    urlVariant: 'DEFAULT';
    videoId: string;
  };
  'MEDIUM.ARTICLE.DEFAULT': {
    articleId: string;
    contentType: 'ARTICLE';
    site: 'MEDIUM';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'MEDIUM.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'MEDIUM';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'PINTEREST.PIN.DEFAULT': {
    contentType: 'PIN';
    pinId: string;
    site: 'PINTEREST';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'PINTEREST.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'PINTEREST';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'REPLIT.REPL.DEFAULT': {
    contentType: 'REPL';
    replId: string;
    site: 'REPLIT';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'RIVE.FILE.DEFAULT': {
    contentType: 'FILE';
    fileId: string;
    site: 'RIVE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SOUNDCLOUD.AUDIO_TRACK.DEFAULT': {
    audioTrackId: string;
    contentType: 'AUDIO_TRACK';
    site: 'SOUNDCLOUD';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'SPLINE.SHARED_FILE.DEFAULT': {
    contentType: 'SHARED_FILE';
    fileId: string;
    site: 'SPLINE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SPLINE.VIEWER_FILE.DEFAULT': {
    contentType: 'VIEWER_FILE';
    fileId: string;
    site: 'SPLINE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SPOTIFY.ALBUM.DEFAULT': {
    albumId: string;
    contentType: 'ALBUM';
    site: 'SPOTIFY';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SPOTIFY.ARTIST.DEFAULT': {
    artistId: string;
    contentType: 'ARTIST';
    site: 'SPOTIFY';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SPOTIFY.AUDIO_TRACK.DEFAULT': {
    audioTrackId: string;
    contentType: 'AUDIO_TRACK';
    site: 'SPOTIFY';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SPOTIFY.EPISODE.DEFAULT': {
    contentType: 'EPISODE';
    episodeId: string;
    site: 'SPOTIFY';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SPOTIFY.PLAYLIST.DEFAULT': {
    contentType: 'PLAYLIST';
    playlistId: string;
    site: 'SPOTIFY';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'SPOTIFY.SHOW.DEFAULT': {
    contentType: 'SHOW';
    showId: string;
    site: 'SPOTIFY';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'STACKBLITZ.PROJECT.DEFAULT': {
    contentType: 'PROJECT';
    projectId: string;
    site: 'STACKBLITZ';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'TIKTOK.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'TIKTOK';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'TIKTOK.VIDEO.DEFAULT': {
    contentType: 'VIDEO';
    site: 'TIKTOK';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
    videoId: string;
  };
  'TWITCH.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'TWITCH';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'TWITTER.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'TWITTER';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'TWITTER.STATUS.DEFAULT': {
    contentType: 'STATUS';
    site: 'TWITTER';
    statusId: string;
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'UPWORK.PERSON_PROFILE_ID.DEFAULT': {
    contentType: 'PERSON_PROFILE_ID';
    freelancerId: string;
    site: 'UPWORK';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'UPWORK.PERSON_PROFILE_USERNAME.DEFAULT': {
    contentType: 'PERSON_PROFILE_USERNAME';
    site: 'UPWORK';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'VIMEO.MANAGE_VIDEO.DEFAULT': {
    contentType: 'VIDEO';
    site: 'VIMEO';
    url: string;
    urlVariant: 'DEFAULT';
    videoId: string;
  };
  'VIMEO.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'VIMEO';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'VIMEO.VIDEO.DEFAULT': {
    contentType: 'VIDEO';
    site: 'VIMEO';
    url: string;
    urlVariant: 'DEFAULT';
    videoId: string;
  };
  'X.PROFILE.DEFAULT': {
    contentType: 'PROFILE';
    site: 'X';
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'X.STATUS.DEFAULT': {
    contentType: 'STATUS';
    site: 'X';
    statusId: string;
    url: string;
    urlVariant: 'DEFAULT';
    username: string;
  };
  'YOUTUBE.CHANNEL.ABBREVIATED': {
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'ABBREVIATED';
    username: string;
  };
  'YOUTUBE.CHANNEL.AT': {
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'AT';
    username: string;
  };
  'YOUTUBE.CHANNEL.BARE': {
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'BARE';
    username: string;
  };
  'YOUTUBE.CHANNEL.FOLDER': {
    channelId: string;
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'FOLDER';
  };
  'YOUTUBE.PLAYLIST.DEFAULT': {
    contentType: 'PLAYLIST';
    playlistId: string;
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'DEFAULT';
  };
  'YOUTUBE.SHORT_VIDEO.DEFAULT': {
    contentType: 'SHORT_VIDEO';
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'DEFAULT';
    videoId: string;
  };
  'YOUTUBE.VIDEO.DEFAULT': {
    contentType: 'VIDEO';
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'DEFAULT';
    videoId: string;
  };
  'YOUTUBE.VIDEO.SHORT_URL': {
    contentType: 'VIDEO';
    site: 'YOUTUBE';
    url: string;
    urlVariant: 'SHORT_URL';
    videoId: string;
  };
};

export type Site = SiteContentInfo[keyof SiteContentInfo]['site'];
export type ContentType = SiteContentInfo[keyof SiteContentInfo]['contentType'];

type SiteContentInfoExtractor<T> = (
  url: URL,
  searchParameters: URLSearchParams,
) => T | null;

type SiteRule<T extends SiteContentInfo[keyof SiteContentInfo]> = {
  contentType: T['contentType'];
  domain: RegExp | string;
  extractContentInfo: SiteContentInfoExtractor<
    Omit<Omit<T, 'contentType' | 'urlVariant'>, 'site'>
  >;
  formatUrl: (
    contentInfo: Omit<Omit<T, 'contentType' | 'urlVariant'>, 'site'>,
  ) => string;
  site: T['site'];
  tests: Record<
    string,
    Omit<Omit<T, 'contentType' | 'urlVariant'>, 'site'> | null
  >;
  urlVariant: T['urlVariant'];
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

const createUsernameContentInfoExtractor = (urlTemplate: string) => {
  return (url) => {
    const segments = url.pathname
      .replace(/^\//u, '')
      .replace(/\/$/u, '')
      .split('/');

    const username = segments[0];

    if (segments.length === 1 && username) {
      return {
        url: urlTemplate.replace('{{username}}', username),
        username,
      };
    }

    return null;
  };
};

export const siteContentRules: {
  [K in keyof SiteContentInfo]: SiteRule<SiteContentInfo[K]>;
} = {
  'APPLE_APPS.APP.DEFAULT': {
    contentType: 'APP',
    domain: 'apps.apple.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'appId',
      /\/app\/[\w-]+\/id(\d+)/u,
      'https://apps.apple.com/app/{{appId}}',
    ),
    formatUrl: ({ appId }) => {
      return `https://apps.apple.com/app/${appId}`;
    },
    site: 'APPLE_APPS',
    tests: {
      'https://apps.apple.com/us/app/yupik/id1264786636': {
        appId: '1264786636',
        url: 'https://apps.apple.com/app/1264786636',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'APPLE_MUSIC.ALBUM.DEFAULT': {
    contentType: 'ALBUM',
    domain: 'music.apple.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'albumId',
      /\/album\/[\w-]+\/(\d+)/u,
      'https://music.apple.com/album/{{albumId}}',
    ),
    formatUrl: ({ albumId }) => {
      return `https://music.apple.com/album/${albumId}`;
    },
    site: 'APPLE_MUSIC',
    tests: {
      'https://music.apple.com/us/album/diamonds/1632654221?i=1632654222': {
        albumId: '1632654221',
        url: 'https://music.apple.com/album/1632654221',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'APPLE_MUSIC.ARTIST.DEFAULT': {
    contentType: 'ARTIST',
    domain: 'music.apple.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'artistId',
      /\/artist\/[\w-]+\/(\d+)/u,
      'https://music.apple.com/artist/{{artistId}}',
    ),
    formatUrl: ({ artistId }) => {
      return `https://music.apple.com/artist/${artistId}`;
    },
    site: 'APPLE_MUSIC',
    tests: {
      'https://music.apple.com/us/artist/8karri/1465797897': {
        artistId: '1465797897',
        url: 'https://music.apple.com/artist/1465797897',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'BEHANCE.GALLERY.DEFAULT': {
    contentType: 'GALLERY',
    domain: 'behance.net',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'galleryId',
      /^\/gallery\/(\d+)/u,
      'https://behance.net/gallery/{{galleryId}}/view',
    ),
    formatUrl: ({ galleryId }) => {
      return `https://behance.net/gallery/${galleryId}/view`;
    },
    site: 'BEHANCE',
    tests: {
      'https://www.behance.net/gallery/120073067/CITROEN-C5X-Lifestyle': {
        galleryId: '120073067',
        url: 'https://behance.net/gallery/120073067/view',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'BEHANCE.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'behance.net',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://behance.net/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://behance.net/${username}`;
    },
    site: 'BEHANCE',
    tests: {
      'https://www.behance.net/': null,
      'https://www.behance.net/gajus': {
        url: 'https://behance.net/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'CANVA.DESIGN.DEFAULT': {
    contentType: 'DESIGN',
    domain: 'canva.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'designId',
      // TODO I am not clear what the two IDs map to.
      // I have confirmed as much that the first one is not a user ID, i.e.
      // If the same user created two designs, the first ID is not the same.
      /^\/design\/([\w-]+\/[\w-]+)/u,
      'https://canva.com/design/{{designId}}/view',
    ),
    formatUrl: ({ designId }) => {
      return `https://canva.com/design/${designId}/view`;
    },
    site: 'CANVA',
    tests: {
      'https://www.canva.com/design/DAC1xq2GJMk/hIMpX3mPUmYkmNshGT0ZEw/view?utm_content=DAC1xq2GJMk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink':
        {
          designId: 'DAC1xq2GJMk/hIMpX3mPUmYkmNshGT0ZEw',
          url: 'https://canva.com/design/DAC1xq2GJMk/hIMpX3mPUmYkmNshGT0ZEw/view',
        },
      'https://www.canva.com/design/DAE_HVNSl10/nZqb-SL59cV6Unj5Xd3y_w/view?utm_content=DAE_HVNSl10&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu':
        {
          designId: 'DAE_HVNSl10/nZqb-SL59cV6Unj5Xd3y_w',
          url: 'https://canva.com/design/DAE_HVNSl10/nZqb-SL59cV6Unj5Xd3y_w/view',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'CODEPEN.PEN.DEFAULT': {
    contentType: 'PEN',
    domain: 'codepen.io',
    extractContentInfo: (url) => {
      const [, username, penId] =
        /^\/([\w-]+)\/pen\/(\w+)/u.exec(url.pathname) ?? [];

      if (username && penId) {
        return {
          penId,
          url: 'https://codepen.io/' + username + '/pen/' + penId,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, penId }) => {
      return `https://codepen.io/${username}/pen/${penId}`;
    },
    site: 'CODEPEN',
    tests: {
      'https://codepen.io/Ashish-Nagvanshi/pen/RwBZJEx': {
        penId: 'RwBZJEx',
        url: 'https://codepen.io/Ashish-Nagvanshi/pen/RwBZJEx',
        username: 'Ashish-Nagvanshi',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'CODESANDBOX.DEVBOX.DEFAULT': {
    contentType: 'DEVBOX',
    domain: 'codesandbox.io',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'sandboxId',
      /^\/p\/devbox\/([\w-]+)/u,
      'https://codesandbox.io/p/devbox/{{sandboxId}}',
    ),
    formatUrl: ({ sandboxId }) => {
      return `https://codesandbox.io/p/devbox/${sandboxId}`;
    },
    site: 'CODESANDBOX',
    tests: {
      'https://codesandbox.io/p/devbox/foo-bar-4q1m9?file=%2Fsrc%2Findex.js': {
        sandboxId: 'foo-bar-4q1m9',
        url: 'https://codesandbox.io/p/devbox/foo-bar-4q1m9',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'CODESANDBOX.SANDBOX.DEFAULT': {
    contentType: 'SANDBOX',
    domain: 'codesandbox.io',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'sandboxId',
      /^\/p\/sandbox\/([\w-]+)/u,
      'https://codesandbox.io/p/sandbox/{{sandboxId}}',
    ),
    formatUrl: ({ sandboxId }) => {
      return `https://codesandbox.io/p/sandbox/${sandboxId}`;
    },
    site: 'CODESANDBOX',
    tests: {
      'https://codesandbox.io/p/sandbox/foo-bar-4q1m9?file=%2Fsrc%2Findex.js': {
        sandboxId: 'foo-bar-4q1m9',
        url: 'https://codesandbox.io/p/sandbox/foo-bar-4q1m9',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'DESCRIPT.PROJECT.DEFAULT': {
    contentType: 'PROJECT',
    domain: 'share.descript.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'projectId',
      /^\/view\/([\w-]+)/u,
      'https://share.descript.com/view/{{projectId}}',
    ),
    formatUrl: ({ projectId }) => {
      return `https://share.descript.com/view/${projectId}`;
    },
    site: 'DESCRIPT',
    tests: {
      'https://share.descript.com/view/xIqYqkJT151/': {
        projectId: 'xIqYqkJT151',
        url: 'https://share.descript.com/view/xIqYqkJT151',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'DRIBBBLE.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'dribbble.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://dribbble.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://dribbble.com/${username}`;
    },
    site: 'DRIBBBLE',
    tests: {
      'https://dribbble.com/': null,
      'https://dribbble.com/gajus': {
        url: 'https://dribbble.com/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'DRIBBBLE.SHOT.DEFAULT': {
    contentType: 'SHOT',
    domain: 'dribbble.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'shotId',
      /\/shots\/(\d+)/u,
      'https://dribbble.com/shots/{{shotId}}',
    ),
    formatUrl: ({ shotId }) => {
      return `https://dribbble.com/shots/${shotId}`;
    },
    site: 'DRIBBBLE',
    tests: {
      'https://dribbble.com/shots/1234567': {
        shotId: '1234567',
        url: 'https://dribbble.com/shots/1234567',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'DROPBOX.FILE.DEFAULT': {
    contentType: 'FILE',
    domain: 'dropbox.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/s\/([a-z\d]+)/u,
      'https://dropbox.com/s/{{fileId}}',
    ),
    formatUrl: ({ fileId }) => {
      return `https://dropbox.com/s/${fileId}`;
    },
    site: 'DROPBOX',
    tests: {
      'https://www.dropbox.com/s/0l5rt7y8rdfgy9l/': {
        fileId: '0l5rt7y8rdfgy9l',
        url: 'https://dropbox.com/s/0l5rt7y8rdfgy9l',
      },
      'https://www.dropbox.com/s/0l5rt7y8rdfgy9l/LL%20Envelope%20clutch%20REV.pdf':
        {
          fileId: '0l5rt7y8rdfgy9l',
          url: 'https://dropbox.com/s/0l5rt7y8rdfgy9l',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'FACEBOOK.POST.DEFAULT': {
    contentType: 'POST',
    domain: 'facebook.com',
    extractContentInfo: (url) => {
      const [, username, postId] =
        /^\/([\w-]+)\/posts\/(\w+)/u.exec(url.pathname) ?? [];

      if (username && postId) {
        return {
          postId,
          url: 'https://facebook.com/' + username + '/posts/' + postId,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, postId }) => {
      return `https://facebook.com/${username}/posts/${postId}`;
    },
    site: 'FACEBOOK',
    tests: {
      'https://www.facebook.com/andrewismusic/posts/451971596293956': {
        postId: '451971596293956',
        url: 'https://facebook.com/andrewismusic/posts/451971596293956',
        username: 'andrewismusic',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'FIGMA.BOARD.DEFAULT': {
    contentType: 'BOARD',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'boardId',
      /^\/board\/([a-zA-Z\d]+)/u,
      'https://figma.com/board/{{boardId}}',
    ),
    formatUrl: ({ boardId }) => {
      return `https://figma.com/board/${boardId}`;
    },
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/board/123456789/abc': {
        boardId: '123456789',
        url: 'https://figma.com/board/123456789',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'FIGMA.DESIGN.DEFAULT': {
    contentType: 'DESIGN',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'designId',
      /^\/design\/([a-zA-Z\d]+)/u,
      'https://figma.com/design/{{designId}}',
    ),
    formatUrl: ({ designId }) => {
      return `https://figma.com/design/${designId}`;
    },
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/design/49P8UWLOadWskPwPvSz4bD/abc': {
        designId: '49P8UWLOadWskPwPvSz4bD',
        url: 'https://figma.com/design/49P8UWLOadWskPwPvSz4bD',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'FIGMA.FILE.DEFAULT': {
    contentType: 'FILE',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/file\/([a-zA-Z\d]+)/u,
      'https://figma.com/file/{{fileId}}',
    ),
    formatUrl: ({ fileId }) => {
      return `https://figma.com/file/${fileId}`;
    },
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/file/49P8UWLOadWskPwPvSz4bD': {
        fileId: '49P8UWLOadWskPwPvSz4bD',
        url: 'https://figma.com/file/49P8UWLOadWskPwPvSz4bD',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'FIGMA.PROTOTYPE.DEFAULT': {
    contentType: 'PROTOTYPE',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'prototypeId',
      /^\/proto\/([a-zA-Z\d]+)/u,
      'https://figma.com/proto/{{prototypeId}}',
    ),
    formatUrl: ({ prototypeId }) => {
      return `https://figma.com/proto/${prototypeId}`;
    },
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/proto/JMT7Yw56eiphRJKp1S9EEe/Rabbit-UI?node-id=1-257&starting-point-node-id=1%3A257':
        {
          prototypeId: 'JMT7Yw56eiphRJKp1S9EEe',
          url: 'https://figma.com/proto/JMT7Yw56eiphRJKp1S9EEe',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'FIVERR.GIG.DEFAULT': {
    contentType: 'GIG',
    domain: 'fiverr.com',
    extractContentInfo: (url) => {
      const [, username, gigId] =
        /^\/([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && gigId) {
        return {
          gigId,
          url: 'https://fiverr.com/' + username + '/' + gigId,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, gigId }) => {
      return `https://fiverr.com/${username}/${gigId}`;
    },
    site: 'FIVERR',
    tests: {
      'https://www.fiverr.com/gajus/do-something-cool': {
        gigId: 'do-something-cool',
        url: 'https://fiverr.com/gajus/do-something-cool',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'FIVERR.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'fiverr.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://fiverr.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://fiverr.com/${username}`;
    },
    site: 'FIVERR',
    tests: {
      'https://www.fiverr.com/gajus': {
        url: 'https://fiverr.com/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GITHUB.GIST.DEFAULT': {
    contentType: 'GIST',
    domain: 'gist.github.com',
    extractContentInfo: (url) => {
      const [, username, gistId] =
        /^\/([\w-]+)\/(\w+)/u.exec(url.pathname) ?? [];

      if (username && gistId) {
        return {
          gistId,
          url: 'https://gist.github.com/' + username + '/' + gistId,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, gistId }) => {
      return `https://gist.github.com/${username}/${gistId}`;
    },
    site: 'GITHUB',
    tests: {
      'https://gist.github.com/gajus/554280/': {
        gistId: '554280',
        url: 'https://gist.github.com/gajus/554280',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GITHUB.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'github.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /\/([\w-]+)\/?/u,
      'https://github.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://github.com/${username}`;
    },
    site: 'GITHUB',
    tests: {
      'https://github.com/gajus': {
        url: 'https://github.com/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GITHUB.REPOSITORY.DEFAULT': {
    contentType: 'REPOSITORY',
    domain: 'github.com',
    extractContentInfo: (url) => {
      const [, username, repositoryName] =
        /^\/([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && repositoryName) {
        return {
          repositoryName,
          url: `https://github.com/${username}/${repositoryName}`,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, repositoryName }) => {
      return `https://github.com/${username}/${repositoryName}`;
    },
    site: 'GITHUB',
    tests: {
      'https://github.com/gajus/slonik': {
        repositoryName: 'slonik',
        url: 'https://github.com/gajus/slonik',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 90,
  },
  'GOOGLE_DOCS.DOCUMENT.DEFAULT': {
    contentType: 'DOCUMENT',
    domain: 'docs.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'documentId',
      /^\/document\/d\/([\w-]+)/u,
      'https://docs.google.com/document/d/{{documentId}}/edit',
    ),
    formatUrl: ({ documentId }) => {
      return `https://docs.google.com/document/d/${documentId}/edit`;
    },
    site: 'GOOGLE_DOCS',
    tests: {
      'https://docs.google.com/document/d/1_1aYiJqjLeHUuO8c3hqOcIjKc567LoWIkKyC82Mt7P0/edit?usp=sharing':
        {
          documentId: '1_1aYiJqjLeHUuO8c3hqOcIjKc567LoWIkKyC82Mt7P0',
          url: 'https://docs.google.com/document/d/1_1aYiJqjLeHUuO8c3hqOcIjKc567LoWIkKyC82Mt7P0/edit',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GOOGLE_DOCS.PRESENTATION.DEFAULT': {
    contentType: 'PRESENTATION',
    domain: 'docs.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'presentationId',
      /^\/presentation\/d\/([\w-]+)/u,
      'https://docs.google.com/presentation/d/{{presentationId}}/edit',
    ),
    formatUrl: ({ presentationId }) => {
      return `https://docs.google.com/presentation/d/${presentationId}/edit`;
    },
    site: 'GOOGLE_DOCS',
    tests: {
      'https://docs.google.com/presentation/d/11V5We7oJGoVOZESmjBg9B6iMiQzEeL58N4ujUEwbrxI/edit?usp=sharing':
        {
          presentationId: '11V5We7oJGoVOZESmjBg9B6iMiQzEeL58N4ujUEwbrxI',
          url: 'https://docs.google.com/presentation/d/11V5We7oJGoVOZESmjBg9B6iMiQzEeL58N4ujUEwbrxI/edit',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GOOGLE_DOCS.SPREADSHEET.DEFAULT': {
    contentType: 'SPREADSHEET',
    domain: 'docs.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'spreadsheetId',
      /^\/spreadsheets\/d\/([\w-]+)/u,
      'https://docs.google.com/spreadsheets/d/{{spreadsheetId}}/edit',
    ),
    formatUrl: ({ spreadsheetId }) => {
      return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
    },
    site: 'GOOGLE_DOCS',
    tests: {
      'https://docs.google.com/spreadsheets/d/1spdflo8CdY98uxwFlGQssbU5Yz8oVjbZ5uM_0qASRCk/':
        {
          spreadsheetId: '1spdflo8CdY98uxwFlGQssbU5Yz8oVjbZ5uM_0qASRCk',
          url: 'https://docs.google.com/spreadsheets/d/1spdflo8CdY98uxwFlGQssbU5Yz8oVjbZ5uM_0qASRCk/edit',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GOOGLE_DRIVE.FILE.DEFAULT': {
    contentType: 'FILE',
    domain: 'drive.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/file\/d\/([\w-]+)/u,
      'https://drive.google.com/file/d/{{fileId}}/view',
    ),
    formatUrl: ({ fileId }) => {
      return `https://drive.google.com/file/d/${fileId}/view`;
    },
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/file/d/1KBs8QdTjs-eJNEgZUxyvmkHkihg6mFnG/view?usp=share_link':
        {
          fileId: '1KBs8QdTjs-eJNEgZUxyvmkHkihg6mFnG',
          url: 'https://drive.google.com/file/d/1KBs8QdTjs-eJNEgZUxyvmkHkihg6mFnG/view',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GOOGLE_DRIVE.FOLDER.DEFAULT': {
    contentType: 'FOLDER',
    domain: 'drive.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'folderId',
      /^\/drive\/folders\/([\w-]+)/u,
      'https://drive.google.com/drive/folders/{{folderId}}',
    ),
    formatUrl: ({ folderId }) => {
      return `https://drive.google.com/drive/folders/${folderId}`;
    },
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/drive/folders/1JppVnu8-pIgr8IY0wuCo51JXP0H0YsDt?usp=share_link':
        {
          folderId: '1JppVnu8-pIgr8IY0wuCo51JXP0H0YsDt',
          url: 'https://drive.google.com/drive/folders/1JppVnu8-pIgr8IY0wuCo51JXP0H0YsDt',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GOOGLE_DRIVE.FOLDERS.DEFAULT': {
    contentType: 'FOLDER',
    domain: 'drive.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'folderId',
      /^\/drive\/u\/\d\/folders\/([\w-]+)/u,
      'https://drive.google.com/drive/folders/{{folderId}}',
    ),
    formatUrl: ({ folderId }) => {
      return `https://drive.google.com/drive/folders/${folderId}`;
    },
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/drive/u/0/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w':
        {
          folderId: '1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
          url: 'https://drive.google.com/drive/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
        },
      'https://drive.google.com/drive/u/1/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w':
        {
          folderId: '1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
          url: 'https://drive.google.com/drive/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GOOGLE_DRIVE.FOLDERVIEW.DEFAULT': {
    contentType: 'FOLDER',
    domain: 'drive.google.com',
    extractContentInfo: (url, searchParameters) => {
      if (!url.pathname.includes('folderview')) {
        return null;
      }

      const id = searchParameters.get('id');

      if (!id || typeof id !== 'string') {
        return null;
      }

      return {
        folderId: id,
        url: `https://drive.google.com/drive/folders/${id}`,
      };
    },
    formatUrl: ({ folderId }) => {
      return `https://drive.google.com/drive/folders/${folderId}`;
    },
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/folderview?id=1Ho_pCqUGdwfAUKkan5CQOMg1Lgl0VoFI':
        {
          folderId: '1Ho_pCqUGdwfAUKkan5CQOMg1Lgl0VoFI',
          url: 'https://drive.google.com/drive/folders/1Ho_pCqUGdwfAUKkan5CQOMg1Lgl0VoFI',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'GOOGLE_PLAY.APP.DEFAULT': {
    contentType: 'APP',
    domain: 'play.google.com',
    extractContentInfo: createIdFromSearchParameterContentExtractor(
      'appId',
      'id',
      'https://play.google.com/store/apps/details?id={{appId}}',
    ),
    formatUrl: ({ appId }) => {
      return `https://play.google.com/store/apps/details?id=${appId}`;
    },
    site: 'GOOGLE_PLAY',
    tests: {
      'https://play.google.com/store/apps/details?id=com.AdrLVD.BBallShootout':
        {
          appId: 'com.AdrLVD.BBallShootout',
          url: 'https://play.google.com/store/apps/details?id=com.AdrLVD.BBallShootout',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'INSTAGRAM.POST.DEFAULT': {
    contentType: 'POST',
    domain: 'instagram.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'postId',
      /^\/p\/([a-zA-Z\d]+)/u,
      'https://instagram.com/p/{{postId}}',
    ),
    formatUrl: ({ postId }) => {
      return `https://instagram.com/p/${postId}`;
    },
    site: 'INSTAGRAM',
    tests: {
      'https://www.instagram.com/p/CqX93czLUe2/': {
        postId: 'CqX93czLUe2',
        url: 'https://instagram.com/p/CqX93czLUe2',
      },
      'https://www.instagram.com/p/CqX93czLUe2/?utm_source=ig_web_copy_link': {
        postId: 'CqX93czLUe2',
        url: 'https://instagram.com/p/CqX93czLUe2',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'INSTAGRAM.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'instagram.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://instagram.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://instagram.com/${username}`;
    },
    site: 'INSTAGRAM',
    tests: {
      'https://www.instagram.com/': null,
      'https://www.instagram.com/gajus': {
        url: 'https://instagram.com/gajus',
        username: 'gajus',
      },
      'https://www.instagram.com/gajus/': {
        url: 'https://instagram.com/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'INSTAGRAM.REEL.DEFAULT': {
    contentType: 'REEL',
    domain: 'instagram.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'reelId',
      /^\/reel\/(\w+)/u,
      'https://instagram.com/reel/{{reelId}}',
    ),
    formatUrl: ({ reelId }) => {
      return `https://instagram.com/reel/${reelId}`;
    },
    site: 'INSTAGRAM',
    tests: {
      'https://www.instagram.com/reel/Cbz20_0j2m4/': {
        reelId: 'Cbz20_0j2m4',
        url: 'https://instagram.com/reel/Cbz20_0j2m4',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'LINKEDIN.FEED_POST.DEFAULT': {
    contentType: 'FEED_POST',
    domain: 'linkedin.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'postId',
      /^\/feed\/update\/urn:li:activity:([\w-]+)/u,
      'https://www.linkedin.com/feed/update/urn:li:activity:{{postId}}/',
    ),
    formatUrl: ({ postId }) => {
      return `https://www.linkedin.com/feed/update/urn:li:activity:${postId}/`;
    },
    site: 'LINKEDIN',
    tests: {
      'https://www.linkedin.com/feed/update/urn:li:activity:6927611303767212032/':
        {
          postId: '6927611303767212032',
          url: 'https://www.linkedin.com/feed/update/urn:li:activity:6927611303767212032/',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'LINKEDIN.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: /(^|\.)linkedin.com$/u,
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'profileId',
      /^\/in\/([\w-]+)/u,
      'https://linkedin.com/in/{{profileId}}/',
    ),
    formatUrl: ({ profileId }) => {
      return `https://linkedin.com/in/${profileId}/`;
    },
    site: 'LINKEDIN',
    tests: {
      'https://in.linkedin.com/in/amol-tiwari-1a1956104': {
        profileId: 'amol-tiwari-1a1956104',
        url: 'https://linkedin.com/in/amol-tiwari-1a1956104/',
      },
      'https://www.linkedin.com/in/vimal-mamidala-a862301b4/': {
        profileId: 'vimal-mamidala-a862301b4',
        url: 'https://linkedin.com/in/vimal-mamidala-a862301b4/',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'LINKTREE.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'linktr.ee',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/(\w+)$/u,
      'https://linktr.ee/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://linktr.ee/${username}`;
    },
    site: 'LINKTREE',
    tests: {
      'https://linktr.ee/gajus': {
        url: 'https://linktr.ee/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'LOOM.VIDEO.DEFAULT': {
    contentType: 'VIDEO',
    domain: 'loom.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/share\/(\w+)/u,
      'https://www.loom.com/share/{{videoId}}',
    ),
    formatUrl: ({ videoId }) => {
      return `https://www.loom.com/share/${videoId}`;
    },
    site: 'LOOM',
    tests: {
      'https://www.loom.com/share/1db1e88a454043b9a885016c5bd6053d': {
        url: 'https://www.loom.com/share/1db1e88a454043b9a885016c5bd6053d',
        videoId: '1db1e88a454043b9a885016c5bd6053d',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'MEDIUM.ARTICLE.DEFAULT': {
    contentType: 'ARTICLE',
    domain: 'medium.com',
    extractContentInfo: (url) => {
      const [, username, articleId] =
        /^\/([a-zA-Z\d]+)\/.*([a-f\d]{12})/u.exec(url.pathname) ?? [];

      if (username && articleId) {
        return {
          articleId,
          url: `https://medium.com/${username}/${articleId}`,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, articleId }) => {
      return `https://medium.com/${username}/${articleId}`;
    },
    site: 'MEDIUM',
    tests: {
      'https://medium.com/gajus/how-a-few-lines-of-code-reduced-database-load-by-a-few-million-queries-964d43ec668a':
        {
          articleId: '964d43ec668a',
          url: 'https://medium.com/gajus/964d43ec668a',
          username: 'gajus',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'MEDIUM.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'medium.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/@([a-zA-Z\d]+)/u,
      'https://medium.com/@{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://medium.com/@${username}`;
    },
    site: 'MEDIUM',
    tests: {
      'https://medium.com/@james': {
        url: 'https://medium.com/@james',
        username: 'james',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'PINTEREST.PIN.DEFAULT': {
    contentType: 'PIN',
    domain: /pinterest\.(ca|co\.uk|com|de|es|fr|ph)/u,
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'pinId',
      /^\/pin\/(\d+)/u,
      'https://pinterest.com/pin/{{pinId}}',
    ),
    formatUrl: ({ pinId }) => {
      return `https://pinterest.com/pin/${pinId}`;
    },
    site: 'PINTEREST',
    tests: {
      'https://www.pinterest.com/pin/180003316664022943/': {
        pinId: '180003316664022943',
        url: 'https://pinterest.com/pin/180003316664022943',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'PINTEREST.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: /pinterest\.(ca|co\.uk|com|de|es|fr|ph)/u,
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://pinterest.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://pinterest.com/${username}`;
    },
    site: 'PINTEREST',
    tests: {
      'https://www.pinterest.com/gajus': {
        url: 'https://pinterest.com/gajus',
        username: 'gajus',
      },
      'https://www.pinterest.com/gajus/': {
        url: 'https://pinterest.com/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'REPLIT.REPL.DEFAULT': {
    contentType: 'REPL',
    domain: 'replit.com',
    extractContentInfo: (url) => {
      const [, username, replId] =
        /^\/@([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && replId) {
        return {
          replId,
          url: 'https://replit.com/@' + username + '/' + replId,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, replId }) => {
      return `https://replit.com/@${username}/${replId}`;
    },
    site: 'REPLIT',
    tests: {
      'https://replit.com/@gajus/my-repl#index.ts': {
        replId: 'my-repl',
        url: 'https://replit.com/@gajus/my-repl',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'RIVE.FILE.DEFAULT': {
    contentType: 'FILE',
    domain: 'rive.app',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/s\/(\w+)/u,
      'https://rive.app/s/{{fileId}}/embed',
    ),
    formatUrl: ({ fileId }) => {
      return `https://rive.app/s/${fileId}/embed`;
    },
    site: 'RIVE',
    tests: {
      'https://rive.app/s/M3YTybD7WU2EDRKOXqVvuw/': {
        fileId: 'M3YTybD7WU2EDRKOXqVvuw',
        url: 'https://rive.app/s/M3YTybD7WU2EDRKOXqVvuw/embed',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SOUNDCLOUD.AUDIO_TRACK.DEFAULT': {
    contentType: 'AUDIO_TRACK',
    domain: 'soundcloud.com',
    extractContentInfo: (url) => {
      const [, username, audioTrackId] =
        /([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && audioTrackId) {
        return {
          audioTrackId,
          url: 'https://soundcloud.com/' + username + '/' + audioTrackId,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, audioTrackId }) => {
      return `https://soundcloud.com/${username}/${audioTrackId}`;
    },
    site: 'SOUNDCLOUD',
    tests: {
      'https://soundcloud.com/strangehumman/kyoto-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing':
        {
          audioTrackId: 'kyoto-2',
          url: 'https://soundcloud.com/strangehumman/kyoto-2',
          username: 'strangehumman',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPLINE.SHARED_FILE.DEFAULT': {
    contentType: 'SHARED_FILE',
    domain: 'my.spline.design',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/([\w-]+)/u,
      'https://my.spline.design/{{fileId}}',
    ),
    formatUrl: ({ fileId }) => {
      return `https://my.spline.design/${fileId}`;
    },
    site: 'SPLINE',
    tests: {
      'https://my.spline.design/cubescroll-381f86b8554fa7f705a477b70711fa59/': {
        fileId: 'cubescroll-381f86b8554fa7f705a477b70711fa59',
        url: 'https://my.spline.design/cubescroll-381f86b8554fa7f705a477b70711fa59',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPLINE.VIEWER_FILE.DEFAULT': {
    contentType: 'VIEWER_FILE',
    domain: 'prod.spline.design',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/([\w-]+)/u,
      'https://prod.spline.design/{{fileId}}/scene.splinecode',
    ),
    formatUrl: ({ fileId }) => {
      return `https://prod.spline.design/${fileId}/scene.splinecode`;
    },
    site: 'SPLINE',
    tests: {
      'https://prod.spline.design/WSzYLJlGageCs5Bt/scene.splinecode': {
        fileId: 'WSzYLJlGageCs5Bt',
        url: 'https://prod.spline.design/WSzYLJlGageCs5Bt/scene.splinecode',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPOTIFY.ALBUM.DEFAULT': {
    contentType: 'ALBUM',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'albumId',
      /^\/album\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/album/{{albumId}}',
    ),
    formatUrl: ({ albumId }) => {
      return `https://open.spotify.com/album/${albumId}`;
    },
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj?si=abC123dEeF': {
        albumId: '0sNOF9WDwhWunNAHPD3Baj',
        url: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPOTIFY.ARTIST.DEFAULT': {
    contentType: 'ARTIST',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'artistId',
      /^\/artist\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/artist/{{artistId}}',
    ),
    formatUrl: ({ artistId }) => {
      return `https://open.spotify.com/artist/${artistId}`;
    },
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF?si=abC123dEeF': {
        artistId: '0OdUWJ0sBjDrqHygGUXeCF',
        url: 'https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPOTIFY.AUDIO_TRACK.DEFAULT': {
    contentType: 'AUDIO_TRACK',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'audioTrackId',
      /^\/track\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/track/{{audioTrackId}}',
    ),
    formatUrl: ({ audioTrackId }) => {
      return `https://open.spotify.com/track/${audioTrackId}`;
    },
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/track/5uj0ZKm9chQRqB6mWKl4Uu': {
        audioTrackId: '5uj0ZKm9chQRqB6mWKl4Uu',
        url: 'https://open.spotify.com/track/5uj0ZKm9chQRqB6mWKl4Uu',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPOTIFY.EPISODE.DEFAULT': {
    contentType: 'EPISODE',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'episodeId',
      /^\/episode\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/episode/{{episodeId}}',
    ),
    formatUrl: ({ episodeId }) => {
      return `https://open.spotify.com/episode/${episodeId}`;
    },
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/episode/6xg5QY1nZzYkqXrY8X7Y3w?si=abC123dEeF': {
        episodeId: '6xg5QY1nZzYkqXrY8X7Y3w',
        url: 'https://open.spotify.com/episode/6xg5QY1nZzYkqXrY8X7Y3w',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPOTIFY.PLAYLIST.DEFAULT': {
    contentType: 'PLAYLIST',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'playlistId',
      /^\/playlist\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/playlist/{{playlistId}}',
    ),
    formatUrl: ({ playlistId }) => {
      return `https://open.spotify.com/playlist/${playlistId}`;
    },
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/playlist/3rGUZnO9djjURH4SRYencD': {
        playlistId: '3rGUZnO9djjURH4SRYencD',
        url: 'https://open.spotify.com/playlist/3rGUZnO9djjURH4SRYencD',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'SPOTIFY.SHOW.DEFAULT': {
    contentType: 'SHOW',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'showId',
      /^\/show\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/show/{{showId}}',
    ),
    formatUrl: ({ showId }) => {
      return `https://open.spotify.com/show/${showId}`;
    },
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/show/6vWDO969PvNqNYHIOW5v0m?si=abC123dEeF': {
        showId: '6vWDO969PvNqNYHIOW5v0m',
        url: 'https://open.spotify.com/show/6vWDO969PvNqNYHIOW5v0m',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'STACKBLITZ.PROJECT.DEFAULT': {
    contentType: 'PROJECT',
    domain: 'stackblitz.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'projectId',
      /^\/edit\/([\w-]+)/u,
      'https://stackblitz.com/edit/{{projectId}}',
    ),
    formatUrl: ({ projectId }) => {
      return `https://stackblitz.com/edit/${projectId}`;
    },
    site: 'STACKBLITZ',
    tests: {
      'https://stackblitz.com/edit/react-ts': {
        projectId: 'react-ts',
        url: 'https://stackblitz.com/edit/react-ts',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'TIKTOK.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'tiktok.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/@([\w.]+)/u,
      'https://tiktok.com/@{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://tiktok.com/@${username}`;
    },
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
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'TIKTOK.VIDEO.DEFAULT': {
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
    formatUrl: ({ username, videoId }) => {
      return `https://tiktok.com/@${username}/video/${videoId}`;
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
    urlVariant: 'DEFAULT',
    weight: 90,
  },
  'TWITCH.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'twitch.tv',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://twitch.tv/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://twitch.tv/${username}`;
    },
    site: 'TWITCH',
    tests: {
      'https://www.twitch.tv/gajus': {
        url: 'https://twitch.tv/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'TWITTER.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'twitter.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/([\w-]+)/u,
      'https://twitter.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://twitter.com/${username}`;
    },
    site: 'TWITTER',
    tests: {
      'https://twitter.com/gajus': {
        url: 'https://twitter.com/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'TWITTER.STATUS.DEFAULT': {
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
    formatUrl: ({ username, statusId }) => {
      return `https://twitter.com/${username}/status/${statusId}`;
    },
    site: 'TWITTER',
    tests: {
      'https://twitter.com/kuizinas/status/1640770515114532872': {
        statusId: '1640770515114532872',
        url: 'https://twitter.com/kuizinas/status/1640770515114532872',
        username: 'kuizinas',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 90,
  },
  'UPWORK.PERSON_PROFILE_ID.DEFAULT': {
    contentType: 'PERSON_PROFILE_ID',
    domain: 'upwork.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'freelancerId',
      /^\/freelancers\/~([\w-]+)/u,
      'https://www.upwork.com/freelancers/~{{freelancerId}}',
    ),
    formatUrl: ({ freelancerId }) => {
      return `https://www.upwork.com/freelancers/~${freelancerId}`;
    },
    site: 'UPWORK',
    tests: {
      'https://www.upwork.com/freelancers/~01eb5e04f87efe1f1d': {
        freelancerId: '01eb5e04f87efe1f1d',
        url: 'https://www.upwork.com/freelancers/~01eb5e04f87efe1f1d',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 90,
  },
  'UPWORK.PERSON_PROFILE_USERNAME.DEFAULT': {
    contentType: 'PERSON_PROFILE_USERNAME',
    domain: 'upwork.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/freelancers\/([\w-]+)/u,
      'https://upwork.com/freelancers/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://upwork.com/freelancers/${username}`;
    },
    site: 'UPWORK',
    tests: {
      'https://www.upwork.com/freelancers/miroslavt': {
        url: 'https://upwork.com/freelancers/miroslavt',
        username: 'miroslavt',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'VIMEO.MANAGE_VIDEO.DEFAULT': {
    contentType: 'VIDEO',
    domain: 'vimeo.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/manage\/videos\/(\d+)/u,
      'https://vimeo.com/{{videoId}}',
    ),
    formatUrl: ({ videoId }) => {
      return `https://vimeo.com/${videoId}`;
    },
    site: 'VIMEO',
    tests: {
      'https://vimeo.com/manage/videos/374790314': {
        url: 'https://vimeo.com/374790314',
        videoId: '374790314',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'VIMEO.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'vimeo.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://vimeo.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://vimeo.com/${username}`;
    },
    site: 'VIMEO',
    tests: {
      'https://vimeo.com/gajus': {
        url: 'https://vimeo.com/gajus',
        username: 'gajus',
      },
      'https://vimeo.com/vobow/chiaroscuro': null,
    },
    urlVariant: 'DEFAULT',
    weight: 110,
  },
  'VIMEO.VIDEO.DEFAULT': {
    contentType: 'VIDEO',
    domain: 'vimeo.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/(\d+)/u,
      'https://vimeo.com/{{videoId}}',
    ),
    formatUrl: ({ videoId }) => {
      return `https://vimeo.com/${videoId}`;
    },
    site: 'VIMEO',
    tests: {
      'https://vimeo.com/123456789': {
        url: 'https://vimeo.com/123456789',
        videoId: '123456789',
      },
      'https://vimeo.com/403917615?embedded=true&source=video_title&owner=111305732':
        {
          url: 'https://vimeo.com/403917615',
          videoId: '403917615',
        },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'X.PROFILE.DEFAULT': {
    contentType: 'PROFILE',
    domain: 'x.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/([\w-]+)/u,
      'https://x.com/{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://x.com/${username}`;
    },
    site: 'X',
    tests: {
      'https://x.com/gajus': {
        url: 'https://x.com/gajus',
        username: 'gajus',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'X.STATUS.DEFAULT': {
    contentType: 'STATUS',
    domain: 'x.com',
    extractContentInfo: (url) => {
      const [, username, statusId] =
        /^\/(\w+)\/status\/(\d+)/u.exec(url.pathname) ?? [];

      if (username && statusId) {
        return {
          statusId,
          url: 'https://x.com/' + username + '/status/' + statusId,
          username,
        };
      }

      return null;
    },
    formatUrl: ({ username, statusId }) => {
      return `https://x.com/${username}/status/${statusId}`;
    },
    site: 'X',
    tests: {
      'https://x.com/kuizinas/status/1640770515114532872': {
        statusId: '1640770515114532872',
        url: 'https://x.com/kuizinas/status/1640770515114532872',
        username: 'kuizinas',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 90,
  },
  'YOUTUBE.CHANNEL.ABBREVIATED': {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/c\/([\w-]+)/u,
      'https://youtube.com/@{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://youtube.com/@${username}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://www.youtube.com/c/aatishgnair': {
        url: 'https://youtube.com/@aatishgnair',
        username: 'aatishgnair',
      },
    },
    urlVariant: 'ABBREVIATED',
    weight: 90,
  },
  'YOUTUBE.CHANNEL.AT': {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/@([\w-]+)/u,
      'https://youtube.com/@{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://youtube.com/@${username}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://www.youtube.com/@aatishgnair': {
        url: 'https://youtube.com/@aatishgnair',
        username: 'aatishgnair',
      },
    },
    urlVariant: 'AT',
    weight: 90,
  },
  'YOUTUBE.CHANNEL.BARE': {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://youtube.com/@{{username}}',
    ),
    formatUrl: ({ username }) => {
      return `https://youtube.com/@${username}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://www.youtube.com/aatishgnair': {
        url: 'https://youtube.com/@aatishgnair',
        username: 'aatishgnair',
      },
    },
    urlVariant: 'BARE',
    weight: 120,
  },
  'YOUTUBE.CHANNEL.FOLDER': {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'channelId',
      /^\/channel\/([\w-]+)/u,
      'https://youtube.com/channel/{{channelId}}',
    ),
    formatUrl: ({ channelId }) => {
      return `https://youtube.com/channel/${channelId}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://youtube.com/channel/UC_8cM2OFz5rUTNskqehzLEg': {
        channelId: 'UC_8cM2OFz5rUTNskqehzLEg',
        url: 'https://youtube.com/channel/UC_8cM2OFz5rUTNskqehzLEg',
      },
    },
    urlVariant: 'FOLDER',
    weight: 100,
  },
  'YOUTUBE.PLAYLIST.DEFAULT': {
    contentType: 'PLAYLIST',
    domain: 'youtube.com',
    extractContentInfo: (url, searchParameters) => {
      if (!url.pathname.includes('playlist')) {
        return null;
      }

      const playlistId = searchParameters.get('list');

      if (!playlistId) {
        return null;
      }

      return {
        playlistId,
        url: 'https://youtube.com/playlist?list=' + playlistId,
      };
    },
    formatUrl: ({ playlistId }) => {
      return `https://youtube.com/playlist?list=${playlistId}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://youtube.com/playlist?list=PLrOLhD2xpUxB_BO-W6iICLS7XLKaif-fR': {
        playlistId: 'PLrOLhD2xpUxB_BO-W6iICLS7XLKaif-fR',
        url: 'https://youtube.com/playlist?list=PLrOLhD2xpUxB_BO-W6iICLS7XLKaif-fR',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'YOUTUBE.SHORT_VIDEO.DEFAULT': {
    contentType: 'SHORT_VIDEO',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/shorts\/([\w-]+)/u,
      'https://youtube.com/shorts/{{videoId}}',
    ),
    formatUrl: ({ videoId }) => {
      return `https://youtube.com/shorts/${videoId}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://youtube.com/shorts/wrBGTNMBkWc?feature=share': {
        url: 'https://youtube.com/shorts/wrBGTNMBkWc',
        videoId: 'wrBGTNMBkWc',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'YOUTUBE.VIDEO.DEFAULT': {
    contentType: 'VIDEO',
    domain: /(^|\.)youtube\.com/u,
    extractContentInfo: createIdFromSearchParameterContentExtractor(
      'videoId',
      'v',
      'https://youtube.com/watch?v={{videoId}}',
    ),
    formatUrl: ({ videoId }) => {
      return `https://youtube.com/watch?v=${videoId}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://m.youtube.com/watch?v=5yrlJbeUgCc&ab_channel=EasyPeasyForTutorials':
        {
          url: 'https://youtube.com/watch?v=5yrlJbeUgCc',
          videoId: '5yrlJbeUgCc',
        },
      'https://www.youtube.com/watch?v=5yrlJbeUgCc&ab_channel=EasyPeasyForTutorials':
        {
          url: 'https://youtube.com/watch?v=5yrlJbeUgCc',
          videoId: '5yrlJbeUgCc',
        },
      'https://www.youtube.com/watch?v=wE9vSGvzSHg': {
        url: 'https://youtube.com/watch?v=wE9vSGvzSHg',
        videoId: 'wE9vSGvzSHg',
      },
    },
    urlVariant: 'DEFAULT',
    weight: 100,
  },
  'YOUTUBE.VIDEO.SHORT_URL': {
    contentType: 'VIDEO',
    domain: 'youtu.be',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/([\w-]+)/u,
      'https://youtube.com/watch?v={{videoId}}',
    ),
    formatUrl: ({ videoId }) => {
      return `https://youtu.be/${videoId}`;
    },
    site: 'YOUTUBE',
    tests: {
      'https://youtu.be/1JppVnu8-pI': {
        url: 'https://youtube.com/watch?v=1JppVnu8-pI',
        videoId: '1JppVnu8-pI',
      },
    },
    urlVariant: 'SHORT_URL',
    weight: 100,
  },
};
