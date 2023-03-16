//? select step 1 to 4
//! personal info
let step1 = document.querySelector(".step-1");
let step2 = document.querySelector(".step-2");
let step3 = document.querySelector(".step-3");
let step4 = document.querySelector(".step-4");
//? step1 personal info
//! step1 personal info
let text_feild = document.querySelectorAll(".step-1 .text-feild");
let reEmail = /(\w+\d*){5,}@(\w+\d*){3,}(.){1}(\w+\d*){2,}/i;
let renum = /(\+?\d+\s*){10,}/i;
let rename = /(\w+){3,}(\s+){1}(\w+){2,}/i;
text_feild.forEach((e) => {
  e.children[0].addEventListener("input", (a) => {
    if (e.children[0].getAttribute("type") == "email") {
      if (reEmail.test(e.children[0].value)) {
        e.classList.remove("wrong");
        e.classList.add("succes");
      } else {
        e.classList.remove("succes");
        e.classList.add("wrong");
      }
    } else if (e.children[0].getAttribute("type") == "tel") {
      if (renum.test(e.children[0].value)) {
        e.classList.remove("wrong");
        e.classList.add("succes");
      } else {
        e.classList.remove("succes");
        e.classList.add("wrong");
      }
    } else {
      if (rename.test(e.children[0].value)) {
        e.classList.remove("wrong");
        e.classList.add("succes");
      } else {
        e.classList.remove("succes");
        e.classList.add("wrong");
      }
    }
    a.preventDefault();
  });
});
//? step2 Select your plan
//! step2 Select your plan
//? step2 Select your plan
//! step2 Select your plan
//? step2 Select your plan
//! step2 Select your plan
let plans = document.querySelectorAll(".step-2 .plans");
let check_month_year = document.querySelector(".step-2 .month .ch-m-y input");
let plans_opj = { 0: "Arcade", 1: "Advanced", 2: "Pro" };
let plans_price_opj = { Arcade: 9, Advanced: 12, Pro: 15 };
let result_plan_name = "";
let result_plan_price = [];
let result_plan_selct_price = [];
//!!!!!!!!!!!//!!!!!!!!!!!
//!!!!!!!!!!!//!!!!!!!!!!!
plans.forEach((e) => {
  e.addEventListener("click", (pr) => {
    for (let i = 0; i < plans.length; i++) {
      plans[i].classList.remove("active");
    }
    result_plan_name = e.children[1].children[0].textContent;
    result_plan_price.push(
      plans_price_opj[e.children[1].children[0].textContent]
    );
    e.classList.toggle("active");
    pr.preventDefault();
  });
});
check_month_year.addEventListener("change", (e) => {
  if (check_month_year.checked) {
    plans.forEach((e) => {
      let p2MoFree = document.createElement("p");
      p2MoFree.textContent = `2 months free`;
      p2MoFree.style.cssText =
        "color: var(--Marine-blue); font-size: 13px !important; margin-bottom: 3px !important;";
      setTimeout(() => {
        e.children[1].appendChild(p2MoFree);
      }, 2000);
      e.children[1].children[1].textContent = `$${
        parseInt(e.children[1].children[1].textContent.slice(1)) * 10
      }/yr`;
    });
    pick_add.forEach((e) => {
      e.children[2].children[0].textContent = `+$${
        parseInt(e.children[2].children[0].textContent.slice(2)) * 10
      }/yr`;
    });
    yearly = "Yearly";
    fin_up(result_pick_add, result_pick_add_price, yearly);
  } else {
    plans.forEach((e) => {
      setTimeout(() => {
        e.children[1].children[2].remove();
      }, 2000);
      e.children[1].children[1].textContent = `$${
        parseInt(e.children[1].children[1].textContent.slice(1)) / 10
      }/mo`;
    });
    pick_add.forEach((e) => {
      e.children[2].children[0].textContent = `+$${
        parseInt(e.children[2].children[0].textContent.slice(2)) / 10
      }/mo`;
    });
    monthly = "Monthly";
    fin_up(result_pick_add, result_pick_add_price, monthly);
  }
  e.preventDefault();
});
//? step3 pick_add
//! step3 pick_add
//? step3 pick_add
//! step3 pick_add
//? step3 pick_add
//! step3 pick_add
let pick_add = document.querySelectorAll(".pick-add");
let result_pick_add = { 0: "", 1: "", 2: "" };
let result_pick_add_price = { 0: "", 1: "", 2: "" };
let yearly = "";
let monthly = "";
pick_add.forEach((e, i) => {
  e.children[0].children[0].addEventListener("change", (pr) => {
    if (e.children[0].children[0].checked) {
      result_pick_add[i] = e.children[1].children[0].textContent;
      result_pick_add_price[i] = `${e.children[2].children[0].textContent.slice(
        2,
        -3
      )}`;
      result_plan_selct_price.push(`${+result_plan_price.slice(-1).join("")}`);
      if (check_month_year.checked) {
        yearly = "Yearly";
        fin_up(result_pick_add, result_pick_add_price, yearly);
      } else {
        monthly = "Monthly";
        fin_up(result_pick_add, result_pick_add_price, monthly);
      }
      e.classList.add("active");
    } else {
      result_pick_add[i] = "";
      result_pick_add_price[i] = "";
      e.classList.remove("active");
    }
    pr.preventDefault();
  });
});
//? step4 Finishing-up
//! step4 Finishing-up
//? step4 Finishing-up
//! step4 Finishing-up
//? step4 Finishing-up
//! step4 Finishing-up
let resultdivs = [];
let Finishing_up = document.querySelector(".Finishing-up");
let div_total = document.querySelector(".total");
let fin_up = (result_pick_add, result_pick_add_price, y_or_m) => {
  let total =
    y_or_m == "Yearly"
      ? +result_plan_selct_price.slice(-1).join("") * 10
      : +result_plan_selct_price.slice(-1).join("");
  resultdivs = [];
  for (let i = 0; i <= 2; i++) {
    if (result_pick_add[i] != "" && result_pick_add_price[i] != "") {
      let div = `<div class="col-8  pt-1 pb-1 ">${result_pick_add[i]}</div>
            <div class="col-3 col-lg-2 pt-1 pb-1 ">+$${
              result_pick_add_price[i]
            }${y_or_m == "Yearly" ? "/yr" : "/mo"}</div>`;
      total += +result_pick_add_price[i];
      resultdivs.push(div);
    }
  }
  Finishing_up.innerHTML = `<div class=" col-8  pt-2  ">
      <h6 class="mode-m-y"> ${result_plan_name}(${y_or_m})</h6>    
      
      
      <a class="Change ">Change</a> 
      
      </div>
      <div class="col-3 col-lg-2  pt-2 ">
      <h6 class=" mt-3">+$${
        y_or_m == "Yearly"
          ? +result_plan_selct_price.slice(-1).join("") * 10 + "/yr"
          : result_plan_selct_price.slice(-1).join("") + "/mo"
      }</h6>
      </div>
      <hr class="w-100">
      ${resultdivs.join("")}
      
      
      `;
  div_total.children[0].children[0].textContent = `${
    y_or_m == "Yearly" ? "total(per year)" : "total(per month)"
  }`;
  div_total.children[1].children[0].textContent = `$${total}${
    y_or_m == "Yearly" ? "/yr" : "/mo"
  }`;
  //!change button
  //?change button
  //!change button
  let btn_change = document.querySelector(".Change");
  btn_change.addEventListener("click", (e) => {
    for (let i = 0; i < 3; i++) {
      steps_opj[i].classList.remove("d-none");
    }
    result_pick_add = { 0: "", 1: "", 2: "" };
    resultdivs = [];
    Finishing_up.innerHTML = "";
    e.preventDefault();
  });
};
//?  navigator
//!  navigator
//?  navigator
//!  navigator
//?  navigator
//!  navigator
let steps_opj = { 0: step3, 1: step2, 2: step1 };
let btn_next_step = document.querySelectorAll(".btn-next-step");
let btn_go_back = document.querySelectorAll(".go-back");
let btn_main_steps = document.querySelectorAll(".btn-main");
let btn_main_steps_opj = { 0: 3, 1: 2, 2: 1 };
btn_next_step.forEach((e, i) => {
  e.addEventListener("click", (pr) => {
    for (let j = 0; j < btn_main_steps.length; j++) {
      btn_main_steps[j].classList.remove("active");
    }
    if (i == 2) {
      if (
        [...text_feild[0].classList].includes("succes") &&
        [...text_feild[1].classList].includes("succes") &&
        [...text_feild[2].classList].includes("succes")
      ) {
        btn_main_steps[btn_main_steps_opj[i]].classList.add("active");
        steps_opj[i].classList.add("d-none");
      } else {
        btn_main_steps[0].classList.add("active");
      }
    } else if (i == 1) {
      if (
        [...plans[0].classList].includes("active") ||
        [...plans[1].classList].includes("active") ||
        [...plans[2].classList].includes("active")
      ) {
        btn_main_steps[btn_main_steps_opj[i]].classList.add("active");
        steps_opj[i].classList.add("d-none");
      } else {
        btn_main_steps[1].classList.add("active");
      }
    } else if (i == 0) {
      if (
        [...pick_add[0].classList].includes("active") ||
        [...pick_add[1].classList].includes("active") ||
        [...pick_add[2].classList].includes("active")
      ) {
        btn_main_steps[btn_main_steps_opj[i]].classList.add("active");
        steps_opj[i].classList.add("d-none");
        pick_add.forEach((e) => {
          e.classList.remove("active");
          e.children[0].children[0].checked = false;
        });
      } else {
        btn_main_steps[2].classList.add("active");
      }
    } else {
      btn_main_steps[btn_main_steps_opj[i]].classList.add("active");
      steps_opj[i].classList.add("d-none");
    }
    pr.preventDefault();
  });
});
//?  button go back
//!  button go back
//?  button go back
//!  button go back
btn_go_back.forEach((e, i) => {
  e.addEventListener("click", (pr) => {
    steps_opj[i].classList.remove("d-none");
    btn_main_steps[btn_main_steps_opj[i]].classList.remove("active");
    btn_main_steps[btn_main_steps_opj[i + 1]].classList.add("active");
    if (i == 0) {
      result_pick_add = { 0: "", 1: "", 2: "" };
      resultdivs = [];
      Finishing_up.innerHTML = "";
    }
    pr.preventDefault();
  });
});
//?  button confirm
//!  button confirm
//?  button confirm
//!  button confirm
let btnConfirm = document.querySelector(".Confirm");
btnConfirm.addEventListener("click", (e) => {
  step4.classList.add("d-none");
  e.preventDefault();
});
