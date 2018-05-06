import * as React from 'react'
import { Container, Feed, Segment } from 'semantic-ui-react'
import { IconWithHover } from './IconWithHover'

export class StartPage extends React.Component<{}, {}>
{
    state = {
        currentElement: ''
    }

    render ()
    {
        return <div>
            <Container>
                <Segment inverted>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label>
                                <img
                                    src='https://static-cdn.jtvnw.net/jtv_user_pictures/iseven-profile_image-8e0392e49ab2bf95-70x70.png'/>
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    <Feed.User>iSEVEN</Feed.User>: Hello! <img
                                    src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" alt="Kappa emote"
                                    className={'twitch-emote'}/>
                                    <Feed.Date>1 Hour Ago</Feed.Date>
                                </Feed.Summary>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <IconWithHover name={'mail'}>
                                            <span>Send private Message</span>
                                        </IconWithHover>
                                        <IconWithHover name={'alarm mute'}>
                                            <span>Timeout</span>
                                        </IconWithHover>
                                        <IconWithHover name={'ban'}>
                                            <span>Ban</span>
                                        </IconWithHover>
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                        <Feed.Event>
                            <Feed.Label>
                                <img
                                    src='https://static-cdn.jtvnw.net/jtv_user_pictures/iseven-profile_image-8e0392e49ab2bf95-70x70.png'/>
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    <Feed.User>iSEVEN</Feed.User>: lul! <img
                                    src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" alt="Kappa emote"
                                    className={'twitch-emote'}/>
                                    <Feed.Date>1 Hour Ago</Feed.Date>
                                </Feed.Summary>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <IconWithHover name={'mail'}>
                                            <span>Send private Message</span>
                                        </IconWithHover>
                                        <IconWithHover name={'alarm mute'}>
                                            <span>Timeout</span>
                                        </IconWithHover>
                                        <IconWithHover name={'ban'}>
                                            <span>Ban</span>
                                        </IconWithHover>
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Segment>
            </Container>
        </div>
    }
}
