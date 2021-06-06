//     expand_hide(optionText, sectionClass, reset = false) {
//         // hide the section and show the expand option
//         if (document.getElementsByClassName(sectionClass)[0].classList.contains("shown")) {
//             document.getElementsByClassName(optionText)[0].textContent = "[expand +]";
//             document.getElementsByClassName(sectionClass)[0].classList.remove("shown");
//             document.getElementsByClassName(sectionClass)[0].classList.add("hidden");
//         // display the section and show the hide option
//         } else if(!reset) {
//             document.getElementsByClassName(optionText)[0].textContent = "[hide -]";
//             document.getElementsByClassName(sectionClass)[0].classList.remove("hidden");
//             document.getElementsByClassName(sectionClass)[0].classList.add("shown");
//         }


//                 <div className="behindTitle">
//                     <h5 className="font-2 color-accent-1">behind the title. <span className="behindTitleButton" onClick={() => this.expand_hide("behindTitleButton", "behindTitleText")}>[expand +]</span></h5>
//                     <div className="outer"><Markdown className="hidden behindTitleText" rehypePlugins={[rehypeRaw, rehypeSanitize]}>{this.state.behind_title.replace(/\\n/g, '<br /><br />')}</Markdown></div>
//                 </div>
//
//                 <div className="behindPoem">
//                     <h5 className="font-2 color-accent-1">behind the poem. <span className="behindPoemButton" onClick={() => this.expand_hide("behindPoemButton", "behindPoemText")}>[expand +]</span></h5>
//                     <div className="outer"><Markdown className="hidden behindPoemText" rehypePlugins={[rehypeRaw, rehypeSanitize]}>{this.state.behind_poem.replace(/\\n/g, '<br /><br />')}</Markdown></div>

//     commentForm(){
//         return (
//             <div>
//                 <br />
//                 <h5 className="comment"><a className="link-style" href={`mailto:emilywritescode+poems@gmail.com?subject=Comment%20for%20"${this.state.title}"`}>[Leave your comments/feedback on this poem (via email).]</a></h5>
//             </div>
//         );
//     }
