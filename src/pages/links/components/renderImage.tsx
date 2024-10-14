import { defineComponent } from "vue";

export default defineComponent({
  name: "RenderImage",
  props: {
    imageData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    /**
     * @description Handle click on link icon
     */
    const clickLinkIconHandler = (url: string) => {
        if (!url) return;
      window.open(
        `${url}`,
        "popup",
        `width=504,height=470,scrollbars=no,resizable=no,toolbar=no,
        directories=no,location=no,menubar=no,status=no,left=0,top=0`
      );
    };

    return {
      clickLinkIconHandler,
    };
  },
  render() {
    return (
      this.imageData.icon && (
        <img
          src={this.imageData.icon}
          title={this.imageData.title}
          alt={this.imageData.alt}
          width={this.imageData.width ? this.imageData.width : "50"}
          height={this.imageData.height ? this.imageData.height : "50"}
          loading="lazy"
          decoding="async"
          class={'cursor-pointer'}
          onClick={() => this.clickLinkIconHandler(this.imageData.icon)}
        />
      )
    );
  },
});
