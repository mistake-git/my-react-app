import React from 'react';

class ContactForm extends React.Component<
    {},
    {
        name: string;
        email: string;
        hasEmailError: boolean;
        hasContentError: boolean;
        content: string;
        isSubmitted: boolean;
    }
> {
    constructor(
        props: Readonly<{
            name: string;
            image: string;
            introduction: string;
            isSubmitted: boolean;
            email: string;
        }>
    ) {
        super(props);
        this.state = {
            name: '',
            email: '',
            content: '',
            hasEmailError: false,
            hasContentError: false,
            isSubmitted: false
        };
    }

    handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
            email: inputValue,
            hasEmailError: isEmpty
        });
    }

    handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
            content: inputValue,
            hasContentError: isEmpty
        });
    }

    handleSubmit() {
        this.setState({ isSubmitted: true });
    }

    render() {
        const emailErrorText = this.state.hasEmailError ? <p className='contact-message-error'>
                    メールアドレスを入力してください
                </p> : '';
        // 条件文 ? 真のときの値 : 偽のときの値
        const contentErrorText = this.state.hasContentError ?<p className='contact-message-error'>
                    お問い合わせ内容を入力してください
                </p> :'';

        

        let contactForm;

        if (this.state.isSubmitted) {
            contactForm = (
                <div className='contact-submit-message'>送信完了</div>
            );
        } else {
            contactForm = (
                <form
                    onSubmit={() => {
                        this.handleSubmit();
                    }}
                >
                    <p>メールアドレス（必須）</p>

                    <input
                        onChange={event => {
                            this.handleEmailChange(event);
                        }}
                        value={this.state.email}
                    />
                    {emailErrorText}
                    <p>お問い合わせ内容</p>
                    <textarea
                        onChange={event => {
                            this.handleContentChange(event);
                        }}
                        value={this.state.content}
                    />
                    {contentErrorText}
                    <input value='送信' type='submit' />
                </form>
            );
        }
        return <div className='contact-form'>{contactForm}</div>;
    }
}

export default ContactForm;
