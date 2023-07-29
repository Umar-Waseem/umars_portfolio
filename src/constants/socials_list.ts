import SocialModel from "@/models/social_model";
import SocialLinks from "./social_constants";
import ImageLinks from "./image_constants";

const socialLinksList: SocialModel[] = [
    new SocialModel('GitHub', SocialLinks.github, ImageLinks.githubIcon),
    new SocialModel('LinkedIn', SocialLinks.linkedin, ImageLinks.linkedinIcon),
    new SocialModel('Twitter', SocialLinks.twitter, ImageLinks.twitterIcon),
    new SocialModel('Medium', SocialLinks.medium, ImageLinks.mediumIcon),
    new SocialModel('Email', SocialLinks.email, ImageLinks.gmailIcon),
    new SocialModel('Upwork', SocialLinks.upwork, ImageLinks.upworkIcon),
    new SocialModel('YouTube', SocialLinks.youtube, ImageLinks.instaIcon),
];

export default socialLinksList;