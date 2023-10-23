

export default function EmojiButtonSelect({ emoji, SelectEmoji }){
    
    function ManejarClick() {
        SelectEmoji(emoji);
    }
    
    return(
        <button className="emoji" onClick={ManejarClick}>{emoji.emoji_img}</button>
    );
}