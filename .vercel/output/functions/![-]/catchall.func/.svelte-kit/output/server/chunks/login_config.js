import { a1 as sanitize_props, a2 as rest_props, Q as push, a3 as fallback, a4 as spread_attributes, a5 as slot, a6 as bind_props, S as pop, a7 as copy_payload, a8 as assign_payload, W as escape_html, a0 as ensure_array_like, X as attr } from "./index.js";
import { css, createStitches, createTheme } from "@stitches/core";
import { generateClassNames, VIEWS, template, merge, en, ThemeSupa } from "@supabase/auth-ui-shared";
function Anchor($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "appearance"]);
  push();
  let classNames;
  const anchorHTMLAttributes = css({
    fontFamily: "$bodyFontFamily",
    fontSize: "$baseBodySize",
    marginBottom: "$anchorBottomMargin",
    color: "$anchorTextColor",
    display: "block",
    textAlign: "center",
    textDecoration: "underline",
    "&:hover": { color: "$anchorTextHoverColor" }
  });
  let href = $$props["href"];
  let appearance = fallback($$props["appearance"], () => ({}), true);
  classNames = generateClassNames("anchor", anchorHTMLAttributes(), appearance);
  $$payload.out += `<a${spread_attributes({
    href,
    ...$$restProps,
    style: appearance?.style?.anchor,
    class: classNames.join(" ")
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></a>`;
  bind_props($$props, { href, appearance });
  pop();
}
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["color", "appearance", "loading"]);
  push();
  let classNames;
  let color = fallback($$props["color"], "default");
  let appearance = fallback($$props["appearance"], () => ({}), true);
  let loading = fallback($$props["loading"], false);
  classNames = generateClassNames("button", color, appearance);
  $$payload.out += `<button${spread_attributes(
    {
      ...$$restProps,
      disabled: loading,
      style: appearance?.style?.button,
      class: classNames.join(" ")
    },
    { "svelte-ll2s9h": true }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></button>`;
  bind_props($$props, { color, appearance, loading });
  pop();
}
function Container($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["direction", "gap", "appearance"]);
  push();
  let classNames;
  const containerDefaultStyles = css({
    display: "flex",
    gap: "4px",
    variants: {
      direction: {
        horizontal: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(48px, 1fr))"
        },
        vertical: { flexDirection: "column", margin: "8px 0" }
      },
      gap: {
        small: { gap: "4px" },
        medium: { gap: "8px" },
        large: { gap: "16px" }
      }
    }
  });
  let direction = fallback($$props["direction"], "horizontal");
  let gap = fallback($$props["gap"], "small");
  let appearance = fallback($$props["appearance"], () => ({}), true);
  classNames = generateClassNames("container", containerDefaultStyles({ direction, gap }), appearance);
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    style: appearance?.style?.container,
    class: classNames.join(" ")
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { direction, gap, appearance });
  pop();
}
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "appearance"]);
  push();
  let classNames;
  const inputDefaultStyles = css({
    fontFamily: "$inputFontFamily",
    background: "$inputBackground",
    borderRadius: "$inputBorderRadius",
    padding: "$inputPadding",
    cursor: "text",
    borderWidth: "$inputBorderWidth",
    borderColor: "$inputBorder",
    borderStyle: "solid",
    fontSize: "$baseInputSize",
    width: "100%",
    color: "$inputText",
    boxSizing: "border-box",
    "&:hover": {
      borderColor: "$inputBorderHover",
      outline: "none"
    },
    "&:focus": {
      borderColor: "$inputBorderFocus",
      outline: "none"
    },
    "&::placeholder": {
      color: "$inputPlaceholder",
      letterSpacing: "initial"
    },
    transitionProperty: "background-color, border",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "100ms",
    variants: {
      type: {
        default: { letterSpacing: "0px" },
        password: { letterSpacing: "0px" }
      }
    }
  });
  let value = fallback($$props["value"], void 0);
  let appearance = fallback($$props["appearance"], () => ({}), true);
  classNames = generateClassNames("input", inputDefaultStyles({ type: "default" }), appearance);
  $$payload.out += `<input${spread_attributes({
    ...$$restProps,
    style: appearance?.style?.input,
    class: classNames.join(" "),
    value
  })}>`;
  bind_props($$props, { value, appearance });
  pop();
}
function Label($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["appearance"]);
  push();
  let classNames;
  const labelDefaultStyles = css({
    fontFamily: "$labelFontFamily",
    fontSize: "$baseLabelSize",
    marginBottom: "$labelBottomMargin",
    color: "$inputLabelText",
    display: "block"
  });
  let appearance = fallback($$props["appearance"], () => ({}), true);
  classNames = generateClassNames("label", labelDefaultStyles(), appearance);
  $$payload.out += `<label${spread_attributes({
    ...$$restProps,
    style: appearance?.style?.label,
    class: classNames.join(" ")
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></label>`;
  bind_props($$props, { appearance });
  pop();
}
function EmailAuth($$payload, $$props) {
  push();
  let authView = fallback($$props["authView"], "sign_in");
  let email = fallback($$props["email"], "");
  let password = fallback($$props["password"], "");
  let supabaseClient = $$props["supabaseClient"];
  let redirectTo = fallback($$props["redirectTo"], void 0);
  let additionalData = fallback($$props["additionalData"], void 0);
  let showLinks = fallback($$props["showLinks"], false);
  let magicLink = fallback($$props["magicLink"], true);
  let i18n = $$props["i18n"];
  let appearance = $$props["appearance"];
  let loading = false;
  let lngKey = authView === "sign_in" ? "sign_in" : "sign_up";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<form method="post" class="svelte-nm5p4o">`;
    Container($$payload2, {
      direction: "vertical",
      gap: "large",
      appearance,
      children: ($$payload3) => {
        Container($$payload3, {
          direction: "vertical",
          gap: "large",
          appearance,
          children: ($$payload4) => {
            $$payload4.out += `<div>`;
            Label($$payload4, {
              for: "email",
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.[lngKey]?.email_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "email",
              type: "email",
              name: "email",
              autofocus: true,
              placeholder: i18n?.[lngKey]?.email_input_placeholder,
              autocomplete: "email",
              appearance,
              get value() {
                return email;
              },
              set value($$value) {
                email = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> <div>`;
            Label($$payload4, {
              for: "password",
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.[lngKey]?.password_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "password",
              type: "password",
              name: "password",
              placeholder: i18n?.[lngKey]?.password_input_placeholder,
              autocomplete: authView === VIEWS.SIGN_IN ? "current-password" : "new-password",
              appearance,
              get value() {
                return password;
              },
              set value($$value) {
                password = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> <!---->`;
            slot($$payload4, $$props, "default", {});
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Button($$payload3, {
          type: "submit",
          color: "primary",
          loading,
          appearance,
          children: ($$payload4) => {
            $$payload4.out += `<!---->${escape_html(i18n?.[lngKey]?.button_label)}`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        if (showLinks) {
          $$payload3.out += "<!--[-->";
          Container($$payload3, {
            direction: "vertical",
            gap: "small",
            appearance,
            children: ($$payload4) => {
              if (authView === VIEWS.SIGN_IN && magicLink) {
                $$payload4.out += "<!--[-->";
                Anchor($$payload4, {
                  href: "#auth-magic-link",
                  appearance,
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(i18n?.magic_link?.link_text)}`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              if (authView === VIEWS.SIGN_IN) {
                $$payload4.out += "<!--[-->";
                Anchor($$payload4, {
                  href: "#auth-forgot-password",
                  appearance,
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(i18n?.forgotten_password?.link_text)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Anchor($$payload4, {
                  href: "#auth-sign-up",
                  appearance,
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(i18n?.sign_up?.link_text)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              } else {
                $$payload4.out += "<!--[!-->";
                Anchor($$payload4, {
                  href: "#auth-sign-in",
                  appearance,
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(i18n?.sign_in?.link_text)}`;
                  },
                  $$slots: { default: true }
                });
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></form>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    authView,
    email,
    password,
    supabaseClient,
    redirectTo,
    additionalData,
    showLinks,
    magicLink,
    i18n,
    appearance
  });
  pop();
}
function ForgottenPassword($$payload, $$props) {
  push();
  let i18n = $$props["i18n"];
  let supabaseClient = $$props["supabaseClient"];
  let authView = $$props["authView"];
  let redirectTo = fallback($$props["redirectTo"], void 0);
  let email = fallback($$props["email"], "");
  let showLinks = fallback($$props["showLinks"], false);
  let appearance = $$props["appearance"];
  let loading = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<form id="auth-forgot-password" method="post" class="svelte-nm5p4o">`;
    Container($$payload2, {
      direction: "vertical",
      gap: "large",
      appearance,
      children: ($$payload3) => {
        Container($$payload3, {
          direction: "vertical",
          gap: "large",
          appearance,
          children: ($$payload4) => {
            $$payload4.out += `<div>`;
            Label($$payload4, {
              for: "email",
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.forgotten_password?.email_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "email",
              type: "email",
              name: "email",
              autofocus: true,
              placeholder: i18n?.forgotten_password?.email_input_placeholder,
              autocomplete: "email",
              appearance,
              get value() {
                return email;
              },
              set value($$value) {
                email = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> `;
            Button($$payload4, {
              type: "submit",
              color: "primary",
              loading,
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.forgotten_password?.button_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        if (showLinks) {
          $$payload3.out += "<!--[-->";
          Anchor($$payload3, {
            href: "#auth-magic-link",
            appearance,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(i18n?.sign_in?.link_text)}`;
            },
            $$slots: { default: true }
          });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    i18n,
    supabaseClient,
    authView,
    redirectTo,
    email,
    showLinks,
    appearance
  });
  pop();
}
function MagicLink($$payload, $$props) {
  push();
  let i18n = $$props["i18n"];
  let supabaseClient = $$props["supabaseClient"];
  let authView = $$props["authView"];
  let redirectTo = fallback($$props["redirectTo"], void 0);
  let appearance = $$props["appearance"];
  let showLinks = fallback($$props["showLinks"], false);
  let email = fallback($$props["email"], "");
  let loading = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<form id="auth-magic-link" method="post" class="svelte-nm5p4o">`;
    Container($$payload2, {
      direction: "vertical",
      gap: "large",
      appearance,
      children: ($$payload3) => {
        Container($$payload3, {
          direction: "vertical",
          gap: "large",
          appearance,
          children: ($$payload4) => {
            $$payload4.out += `<div>`;
            Label($$payload4, {
              for: "email",
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.magic_link?.email_input_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "email",
              type: "email",
              name: "email",
              autofocus: true,
              placeholder: i18n?.magic_link?.email_input_placeholder,
              autocomplete: "email",
              appearance,
              get value() {
                return email;
              },
              set value($$value) {
                email = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> `;
            Button($$payload4, {
              type: "submit",
              color: "primary",
              loading,
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.magic_link?.button_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        if (showLinks) {
          $$payload3.out += "<!--[-->";
          Anchor($$payload3, {
            href: "#auth-sign-in",
            appearance,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(i18n?.sign_in?.link_text)}`;
            },
            $$slots: { default: true }
          });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    i18n,
    supabaseClient,
    authView,
    redirectTo,
    appearance,
    showLinks,
    email
  });
  pop();
}
function Icons($$payload, $$props) {
  let provider = $$props["provider"];
  if (provider === "google") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (provider === "facebook") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (provider === "twitter") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (provider === "apple") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21px" height="21px" class="svelte-10a6av0"> <path d="M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"></path></svg>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (provider === "github") {
            $$payload.out += "<!--[-->";
            $$payload.out += `<svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="21px" height="21px" class="svelte-10a6av0"> <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>`;
          } else {
            $$payload.out += "<!--[!-->";
            if (provider === "gitlab") {
              $$payload.out += "<!--[-->";
              $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path></svg>`;
            } else {
              $$payload.out += "<!--[!-->";
              if (provider === "bitbucket") {
                $$payload.out += "<!--[-->";
                $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 62.42 62.42" class="svelte-10a6av0"><defs><linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><title>Bitbucket-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue" transform="translate(0 -3.13)"><path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"></path><path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"></path></g></g></svg>`;
              } else {
                $$payload.out += "<!--[!-->";
                if (provider === "discord") {
                  $$payload.out += "<!--[-->";
                  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><path fill="#536dfe" d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"></path></svg>`;
                } else {
                  $$payload.out += "<!--[!-->";
                  if (provider === "azure") {
                    $$payload.out += "<!--[-->";
                    $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><linearGradient id="k8yl7~hDat~FaoWq8WjN6a" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path></svg>`;
                  } else {
                    $$payload.out += "<!--[!-->";
                    if (provider === "keycloak") {
                      $$payload.out += "<!--[-->";
                      $$payload.out += `<svg width="21px" height="21px" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-10a6av0"><path d="M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z" fill="#008AAA"></path></svg>`;
                    } else {
                      $$payload.out += "<!--[!-->";
                      if (provider === "linkedin") {
                        $$payload.out += "<!--[-->";
                        $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path></svg>`;
                      } else {
                        $$payload.out += "<!--[!-->";
                        if (provider === "notion") {
                          $$payload.out += "<!--[-->";
                          $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" fill-rule="evenodd" clip-rule="evenodd" class="svelte-10a6av0"><path fill="#fff" fill-rule="evenodd" d="M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z" clip-rule="evenodd"></path><path fill="#424242" fill-rule="evenodd" d="M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z" clip-rule="evenodd"></path></svg>`;
                        } else {
                          $$payload.out += "<!--[!-->";
                          if (provider === "slack") {
                            $$payload.out += "<!--[-->";
                            $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px" class="svelte-10a6av0"><path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path></svg>`;
                          } else {
                            $$payload.out += "<!--[!-->";
                            if (provider === "spotify") {
                              $$payload.out += "<!--[-->";
                              $$payload.out += `<svg width="21px" height="21px" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-10a6av0"><path d="M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z" fill="#1ED760"></path></svg>`;
                            } else {
                              $$payload.out += "<!--[!-->";
                              if (provider === "twitch") {
                                $$payload.out += "<!--[-->";
                                $$payload.out += `<svg width="21px" height="21px" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-10a6av0"><path d="M416 240L352 304H288L232 360V304H160V64H416V240Z" fill="white"></path><path d="M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z" fill="#9146FF"></path><path d="M368 120H336V216H368V120Z" fill="#9146FF"></path><path d="M280 120H248V216H280V120Z" fill="#9146FF"></path></svg>`;
                              } else {
                                $$payload.out += "<!--[!-->";
                                if (provider === "workos") {
                                  $$payload.out += "<!--[-->";
                                  $$payload.out += `<svg width="21px" height="21px" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-10a6av0"><path d="M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z" fill="#6363F1"></path><path d="M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z" fill="#6363F1"></path></svg>`;
                                } else {
                                  $$payload.out += "<!--[!-->";
                                  if (provider === "kakao") {
                                    $$payload.out += "<!--[-->";
                                    $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 256 256" class="svelte-10a6av0"><path fill="#FFE812" d="M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"></path><path d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"></path><path fill="#FFE812" d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"></path></svg>`;
                                  } else {
                                    $$payload.out += "<!--[!-->";
                                  }
                                  $$payload.out += `<!--]-->`;
                                }
                                $$payload.out += `<!--]-->`;
                              }
                              $$payload.out += `<!--]-->`;
                            }
                            $$payload.out += `<!--]-->`;
                          }
                          $$payload.out += `<!--]-->`;
                        }
                        $$payload.out += `<!--]-->`;
                      }
                      $$payload.out += `<!--]-->`;
                    }
                    $$payload.out += `<!--]-->`;
                  }
                  $$payload.out += `<!--]-->`;
                }
                $$payload.out += `<!--]-->`;
              }
              $$payload.out += `<!--]-->`;
            }
            $$payload.out += `<!--]-->`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { provider });
}
function Divider($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["appearance"]);
  push();
  const dividerDefaultStyles = css({
    background: "$dividerBackground",
    display: "block",
    margin: "16px 0",
    height: "1px",
    width: "100%"
  });
  let appearance = fallback($$props["appearance"], () => ({}), true);
  const classNames = generateClassNames("divider", dividerDefaultStyles(), appearance);
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    style: appearance?.style?.divider,
    class: classNames.join(" ")
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { appearance });
  pop();
}
function SocialAuth($$payload, $$props) {
  push();
  let verticalSocialLayout;
  let supabaseClient = $$props["supabaseClient"];
  let socialLayout = $$props["socialLayout"];
  let redirectTo = fallback($$props["redirectTo"], void 0);
  let onlyThirdPartyProviders = $$props["onlyThirdPartyProviders"];
  let i18n = $$props["i18n"];
  let providers = fallback($$props["providers"], () => [], true);
  let providerScopes = $$props["providerScopes"];
  let queryParams = $$props["queryParams"];
  let appearance = $$props["appearance"];
  let loading = false;
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  let iconTitle = (provider) => template(i18n["sign_in"]?.social_provider_text, { provider: capitalize(provider) });
  verticalSocialLayout = socialLayout === "vertical" ? true : false;
  if (providers.length) {
    $$payload.out += "<!--[-->";
    Container($$payload, {
      direction: "vertical",
      gap: "large",
      appearance,
      children: ($$payload2) => {
        Container($$payload2, {
          direction: verticalSocialLayout ? "vertical" : "horizontal",
          gap: verticalSocialLayout ? "small" : "medium",
          appearance,
          children: ($$payload3) => {
            const each_array = ensure_array_like(providers);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let provider = each_array[$$index];
              Button($$payload3, {
                "aria-label": iconTitle(provider),
                type: "submit",
                color: "default",
                loading,
                appearance,
                children: ($$payload4) => {
                  Icons($$payload4, { provider });
                  $$payload4.out += `<!----> `;
                  if (verticalSocialLayout) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `${escape_html(iconTitle(provider))}`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    if (!onlyThirdPartyProviders) {
      $$payload.out += "<!--[-->";
      Divider($$payload, { appearance });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    supabaseClient,
    socialLayout,
    redirectTo,
    onlyThirdPartyProviders,
    i18n,
    providers,
    providerScopes,
    queryParams,
    appearance
  });
  pop();
}
function UpdatePassword($$payload, $$props) {
  push();
  let i18n = $$props["i18n"];
  let supabaseClient = $$props["supabaseClient"];
  let authView = $$props["authView"];
  let appearance = $$props["appearance"];
  let showLinks = fallback($$props["showLinks"], false);
  let password = "";
  let loading = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<form id="auth-update-password" method="post" class="svelte-nm5p4o">`;
    Container($$payload2, {
      direction: "vertical",
      gap: "large",
      appearance,
      children: ($$payload3) => {
        Container($$payload3, {
          direction: "vertical",
          gap: "large",
          appearance,
          children: ($$payload4) => {
            $$payload4.out += `<div>`;
            Label($$payload4, {
              for: "password",
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.update_password?.password_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              id: "password",
              type: "password",
              name: "password",
              autofocus: true,
              placeholder: i18n?.update_password?.password_input_placeholder,
              autocomplete: "password",
              appearance,
              get value() {
                return password;
              },
              set value($$value) {
                password = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> `;
            Button($$payload4, {
              type: "submit",
              color: "primary",
              loading,
              appearance,
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(i18n?.update_password?.button_label)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        if (showLinks) {
          $$payload3.out += "<!--[-->";
          Anchor($$payload3, {
            href: "#auth-magic-link",
            appearance,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(i18n?.sign_in?.link_text)}`;
            },
            $$slots: { default: true }
          });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    i18n,
    supabaseClient,
    authView,
    appearance,
    showLinks
  });
  pop();
}
function VerifyOtp($$payload, $$props) {
  push();
  let i18n = $$props["i18n"];
  let supabaseClient = $$props["supabaseClient"];
  let authView = $$props["authView"];
  let otpType = fallback($$props["otpType"], "email");
  let appearance = $$props["appearance"];
  let showLinks = fallback($$props["showLinks"], false);
  let email = fallback($$props["email"], "");
  let phone = fallback($$props["phone"], "");
  let token = fallback($$props["token"], "");
  let loading = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<form id="auth-magic-link" method="post" class="svelte-nm5p4o">`;
    Container($$payload2, {
      direction: "vertical",
      gap: "large",
      appearance,
      children: ($$payload3) => {
        if (["sms", "phone_change"].includes(otpType)) {
          $$payload3.out += "<!--[-->";
          $$payload3.out += `<div>`;
          Label($$payload3, {
            for: "phone",
            appearance,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(i18n?.verify_otp?.phone_input_label)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Input($$payload3, {
            id: "phone",
            type: "text",
            name: "phone",
            autofocus: true,
            placeholder: i18n?.verify_otp?.phone_input_placeholder,
            autocomplete: "phone",
            appearance,
            get value() {
              return phone;
            },
            set value($$value) {
              phone = $$value;
              $$settled = false;
            }
          });
          $$payload3.out += `<!----></div>`;
        } else {
          $$payload3.out += "<!--[!-->";
          $$payload3.out += `<div>`;
          Label($$payload3, {
            for: "email",
            appearance,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(i18n?.verify_otp?.email_input_label)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Input($$payload3, {
            id: "email",
            type: "email",
            name: "email",
            autofocus: true,
            placeholder: i18n?.verify_otp?.email_input_placeholder,
            autocomplete: "email",
            appearance,
            get value() {
              return email;
            },
            set value($$value) {
              email = $$value;
              $$settled = false;
            }
          });
          $$payload3.out += `<!----></div>`;
        }
        $$payload3.out += `<!--]--> <div>`;
        Label($$payload3, {
          for: "token",
          appearance,
          children: ($$payload4) => {
            $$payload4.out += `<!---->${escape_html(i18n?.verify_otp?.token_input_label)}`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          id: "token",
          type: "text",
          name: "token",
          placeholder: i18n?.verify_otp?.token_input_placeholder,
          autocomplete: "token",
          appearance,
          get value() {
            return token;
          },
          set value($$value) {
            token = $$value;
            $$settled = false;
          }
        });
        $$payload3.out += `<!----></div> `;
        Button($$payload3, {
          type: "submit",
          color: "primary",
          loading,
          appearance,
          children: ($$payload4) => {
            $$payload4.out += `<!---->${escape_html(i18n?.verify_otp?.button_label)}`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        if (showLinks) {
          $$payload3.out += "<!--[-->";
          Anchor($$payload3, {
            href: "#auth-sign-in",
            appearance,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(i18n?.sign_in?.link_text)}`;
            },
            $$slots: { default: true }
          });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> `;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    i18n,
    supabaseClient,
    authView,
    otpType,
    appearance,
    showLinks,
    email,
    phone,
    token
  });
  pop();
}
function Auth($$payload, $$props) {
  push();
  let i18n, themeVariables, SignView;
  let supabaseClient = $$props["supabaseClient"];
  let socialLayout = fallback($$props["socialLayout"], "vertical");
  let providers = fallback($$props["providers"], () => [], true);
  let providerScopes = fallback($$props["providerScopes"], void 0);
  let queryParams = fallback($$props["queryParams"], void 0);
  let view = fallback($$props["view"], "sign_in");
  let redirectTo = fallback($$props["redirectTo"], void 0);
  let onlyThirdPartyProviders = fallback($$props["onlyThirdPartyProviders"], false);
  let magicLink = fallback($$props["magicLink"], false);
  let showLinks = fallback($$props["showLinks"], true);
  let appearance = fallback($$props["appearance"], () => ({}), true);
  let theme = fallback($$props["theme"], "default");
  let localization = fallback($$props["localization"], () => ({}), true);
  let otpType = fallback($$props["otpType"], "email");
  let additionalData = fallback($$props["additionalData"], void 0);
  i18n = merge(en, localization.variables ?? {});
  createStitches({
    theme: merge(appearance?.theme?.default ?? {}, appearance?.variables?.default ?? {})
  });
  themeVariables = createTheme(merge(
    // @ts-ignore
    appearance?.theme?.[theme],
    appearance?.variables?.[theme] ?? {}
  ));
  SignView = view === "sign_in" || view === "sign_up" || view === "magic_link";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div${attr("class", theme !== "default" ? themeVariables : "")}>`;
    if (SignView) {
      $$payload2.out += "<!--[-->";
      SocialAuth($$payload2, {
        appearance,
        supabaseClient,
        providers,
        providerScopes,
        queryParams,
        socialLayout,
        redirectTo,
        onlyThirdPartyProviders,
        i18n
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (view === VIEWS.SIGN_IN) {
      $$payload2.out += "<!--[-->";
      if (!onlyThirdPartyProviders) {
        $$payload2.out += "<!--[-->";
        EmailAuth($$payload2, {
          appearance,
          supabaseClient,
          redirectTo,
          magicLink,
          showLinks,
          i18n,
          additionalData,
          get authView() {
            return view;
          },
          set authView($$value) {
            view = $$value;
            $$settled = false;
          }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (view === VIEWS.SIGN_UP) {
      $$payload2.out += "<!--[-->";
      if (!onlyThirdPartyProviders) {
        $$payload2.out += "<!--[-->";
        EmailAuth($$payload2, {
          appearance,
          supabaseClient,
          redirectTo,
          magicLink,
          showLinks,
          additionalData,
          i18n,
          get authView() {
            return view;
          },
          set authView($$value) {
            view = $$value;
            $$settled = false;
          },
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            slot($$payload3, $$props, "default", {});
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (view === VIEWS.FORGOTTEN_PASSWORD) {
      $$payload2.out += "<!--[-->";
      ForgottenPassword($$payload2, {
        i18n,
        supabaseClient,
        showLinks,
        appearance,
        redirectTo,
        get authView() {
          return view;
        },
        set authView($$value) {
          view = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (view === VIEWS.MAGIC_LINK) {
      $$payload2.out += "<!--[-->";
      MagicLink($$payload2, {
        i18n,
        supabaseClient,
        appearance,
        redirectTo,
        showLinks,
        get authView() {
          return view;
        },
        set authView($$value) {
          view = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (view === VIEWS.UPDATE_PASSWORD) {
      $$payload2.out += "<!--[-->";
      UpdatePassword($$payload2, {
        i18n,
        supabaseClient,
        appearance,
        showLinks,
        get authView() {
          return view;
        },
        set authView($$value) {
          view = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (view === VIEWS.VERIFY_OTP) {
      $$payload2.out += "<!--[-->";
      VerifyOtp($$payload2, {
        i18n,
        supabaseClient,
        appearance,
        showLinks,
        otpType,
        get authView() {
          return view;
        },
        set authView($$value) {
          view = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    supabaseClient,
    socialLayout,
    providers,
    providerScopes,
    queryParams,
    view,
    redirectTo,
    onlyThirdPartyProviders,
    magicLink,
    showLinks,
    appearance,
    theme,
    localization,
    otpType,
    additionalData
  });
  pop();
}
const oauthProviders = ["github", "google"];
const sharedAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "oklch(var(--p))",
        brandAccent: "oklch(var(--ac))",
        inputText: "oklch(var(--n))",
        brandButtonText: "oklch(var(--pc))",
        messageText: "oklch(var(--b))",
        dividerBackground: "oklch(var(--n))",
        inputLabelText: "oklch(var(--n))",
        defaultButtonText: "oklch(var(--n))",
        anchorTextColor: "oklch(var(--p))",
        inputBackground: "oklch(var(--b1))",
        inputBorder: "oklch(var(--n))",
        inputPlaceholder: "oklch(var(--n) / 0.6)"
      },
      fontSizes: {
        baseInputSize: "16px",
        baseLabelSize: "14px",
        baseButtonSize: "16px"
      },
      borderRadius: {
        inputBorderRadius: "0.5rem",
        buttonBorderRadius: "0.5rem"
      },
      spacing: {
        inputPadding: "12px 16px",
        buttonPadding: "12px 24px"
      }
    }
  },
  className: {
    button: "authBtn",
    input: "input input-bordered",
    label: "label-text",
    anchor: "link link-hover",
    message: "text-sm"
  }
};
export {
  Auth as A,
  oauthProviders as o,
  sharedAppearance as s
};
