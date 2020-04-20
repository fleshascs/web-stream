// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Textarea, ShoutboxContainer } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IShoutbox } from "./Shoutbox";
// #endregion Interface Imports

export const Shoutbox: React.FunctionComponent<IShoutbox.IProps> = (
    props: IShoutbox.IProps
) => {
    return (
        <Container>
            {/* <div className="text-right mt-1 px-2" onClick={this.toggleSound}>
            <i className="material-icons text-muted" style={{ fontSize: '18px' }}>
                {this.state.soundEnabled ? 'volume_up' : 'volume_off'}
            </i>
        </div> */}

            <ShoutboxContainer
            // onScroll={this.handleScroll}
            //innerRef={this.scrollableBox}
            >
                {/* {MessagesHTML}
            <div ref={this.messagesEnd} /> */}
            </ShoutboxContainer>

            {/* <MoreMessagesToScroll
            show={this.state.showScrollHelper}
            onClick={this.scrollToBottom}
        /> */}
            {/* {!loggedIn ? (
            <NotLoggedIn className="px-3 pt-2">
                {t('you-are-not-logged-in')}
            </NotLoggedIn>
        ) : null} */}

            <div className="mx-3 py-2">
                <Textarea

                //onChange={this.handleMessageChange}
                // value={this.state.message}
                // innerRef={this.input}
                />
                <div className="d-flex">
                    {/* <EmojiButton onEmojiSelect={this.onEmojiSelect} /> */}
                    <button
                        //type="primary"
                        // disabled={!(this.state.message && loggedIn)}
                        // onClick={this.handleMessageSubmit}
                        className="ml-auto"
                    >
                        Chat
                    </button>
                </div>
            </div>
        </Container>
    );
};
