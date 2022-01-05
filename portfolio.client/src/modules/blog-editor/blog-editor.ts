import { PostDTO } from "./../../common/models/postDTO";
import { PostService } from "./../../common/services/post-service";
import { autoinject, bindable, TaskQueue } from "aurelia-framework";

@autoinject()
export class BlogEditor {
  public editor: kendo.ui.Editor;
  postId: number;
  tempPost: PostDTO;
  realPost: PostDTO;

  tools = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "justifyLeft",
    "justifyCenter",
    "justifyRight",
    "justifyFull",
    "insertUnorderedList",
    "insertOrderedList",
    "indent",
    "outdent",
    "createLink",
    "unlink",
    "insertImage",
    "tableWizard",
    "createTable",
    "addRowAbove",
    "addRowBelow",
    "addColumnLeft",
    "addColumnRight",
    "deleteRow",
    "deleteColumn",
    "mergeCellsHorizontally",
    "mergeCellsVertically",
    "splitCellHorizontally",
    "splitCellVertically",
    "viewHtml",
    "formatting",
    "cleanFormatting",
  ];

  resizable = {
    content: true,
    toolbar: true,
  };

  constructor(
    private taskQueue: TaskQueue,
    private postService: PostService
  ) {}

  public editorReady() {
    this.taskQueue.queueTask(() => {
      if (this.editor) {
        this.postService.getContent(this.postId).then((contents: string) => {
          this.editor.value(contents);
        });
      }
    });
  }

  public postChange() {
    console.log(this.editor.value());
  }

  activate(params: any) {
    this.postId = params.id;
    this.realPost = this.postService.postList.find((e) => e.id == params.id);
    this.tempPost = Object.assign({}, this.realPost);
  }

  handleSubmit() {
    this.realPost.postTitle = this.tempPost.postTitle;
    console.log(this.tempPost.postTitle);
  }
}
