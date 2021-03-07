export interface LinkFlairRichtext {
    e?: string;
    t?: string;
    a?: string;
    u?: string;
}

export interface MediaEmbed {
}

export interface RedditVideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface SecureMediaEmbed {
}

export interface AuthorFlairRichtext {
    e: string;
    t: string;
}

export interface Gildings {
    gid_1?: number;
    gid_2?: number;
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Resolution {
    url: string;
    width: number;
    height: number;
}
export interface ImageVariant {
    source: Source;
    resolutions: Resolution[];
}

type VariantKey ='gif' | 'mp4' | 'obfuscated' | 'nsfw';

export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: {[Key in VariantKey]?: ImageVariant};
    id: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
    reddit_video_preview?: RedditVideo;
}

export interface ResizedIcon {
    url: string;
    width: number;
    height: number;
}

export interface ResizedStaticIcon {
    url: string;
    width: number;
    height: number;
}

export interface AllAwarding {
    giver_coin_reward?: number | null;
    subreddit_id: string | null;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number | null;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: ResizedIcon[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon[];
    icon_format: string | null;
    icon_height: number;
    penny_price?: number | null;
    award_type: string;
    static_icon_url: string;
}

export interface Media {
    reddit_video: RedditVideo;
}

export interface P {
    y: number;
    x: number;
    u: string;
}

export interface S {
    y: number;
    x: number;
    u: string;
}

export interface MediaMetadata {
    status: string;
    e: string;
    m: string;
    p: P[];
    s: S;
    id: string;
}

export interface Item {
    media_id: string;
    id: number;
    caption?: string;
}

export interface GalleryData {
    items: Item[];
}

export interface Post {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: LinkFlairRichtext[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string | null;
    downs: number;
    thumbnail_height?: number | null;
    top_awarded_type: string | null;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: string | null;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    thumbnail_width?: number | null;
    author_flair_template_id: string | null;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: Media | null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text: string | null;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: any;
    author_flair_css_class: string | null;
    author_flair_richtext: AuthorFlairRichtext[];
    gildings: Gildings;
    post_hint?: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: string | null;
    likes?: any;
    suggested_sort: string | null;
    banned_at_utc?: any;
    url_overridden_by_dest?: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview?: Preview;
    all_awardings: AllAwarding[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string | null;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color: string | null;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: Media | null;
    is_video: boolean;
    link_flair_template_id?: string;
    is_gallery?: boolean;
    media_metadata?: Record<string, MediaMetadata | undefined>;
    gallery_data?: GalleryData;
    crosspost_parent_list?: Post[];
    crosspost_parent?: string;
}

export interface Child {
    kind: string;
    data: Post;
}

export interface Data {
    modhash: string;
    dist: number;
    children: Child[];
    after: string | null;
    before: string | null;
}

export interface Feed {
    kind: string;
    data: Data;
}