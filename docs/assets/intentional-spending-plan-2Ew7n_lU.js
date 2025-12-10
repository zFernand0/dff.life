import"./modulepreload-polyfill-B5Qt9EMX.js";let r={incomeStreams:[],monthlyExpenses:[],guiltFreeSpending:[],savingsGoals:[],investments:[]};const u={incomeStreams:{title:"Income",color:"green"},monthlyExpenses:{title:"Expenses",color:"blue"},investments:{title:"Investments",color:"purple"},savingsGoals:{title:"Savings Goals",color:"teal"},guiltFreeSpending:{title:"Guilt-Free Spending",color:"yellow"}},h=e=>{const t=parseFloat(e);return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(isNaN(t)?0:t)},g=(e,t=!0)=>{const n=document.getElementById("status-message");n.textContent=e,n.classList.remove("hidden","bg-red-500","bg-green-500"),n.classList.add(t?"bg-red-500":"bg-green-500"),setTimeout(()=>{n.classList.add("hidden")},5e3)},b=e=>{switch(e){case"incomeStreams":return[{name:"Wages / Salary",defaultAmount:0},{name:"Business Income",defaultAmount:0},{name:"Rental Income",defaultAmount:0},{name:"Side Gig / Freelance",defaultAmount:0},{name:"Other Income",defaultAmount:0}];case"monthlyExpenses":return[{name:"Mortgage / Rent",defaultAmount:0},{name:"Utilities (Water, Gas, Electric)",defaultAmount:0},{name:"Internet / Phone Bill",defaultAmount:0},{name:"Groceries",defaultAmount:0},{name:"Insurance (Health, Car, Home)",defaultAmount:0},{name:"Subscriptions (Netflix, Spotify, etc.)",defaultAmount:0},{name:"Installments (Tech, Furniture)",defaultAmount:0},{name:"Childcare / School Fees",defaultAmount:0}];case"investments":return[{name:"Retirement Account (401k/403b)",defaultAmount:0},{name:"IRA / Roth IRA",defaultAmount:0},{name:"Brokerage / Stocks",defaultAmount:0},{name:"HSA Contributions",defaultAmount:0}];case"savingsGoals":return[{name:"Emergency Fund",defaultAmount:0},{name:"Buying a House Down Payment",defaultAmount:0},{name:"Education Fund",defaultAmount:0},{name:"Wedding Fund",defaultAmount:0},{name:"Moving Fund",defaultAmount:0},{name:"Car Replacement Fund",defaultAmount:0},{name:"Trip / Vacation Fund",defaultAmount:0}];case"guiltFreeSpending":return[{name:"Dining Out / Takeout",defaultAmount:0},{name:"Entertainment (Movies, Museums, Games)",defaultAmount:0},{name:"Personal Products (Beauty, Clothes, Shoes)",defaultAmount:0},{name:"Hobbies / Wellness",defaultAmount:0},{name:"Gifts / Donations",defaultAmount:0}];default:return[]}},L=e=>{switch(e){case"incomeStreams":return{icon:"DollarSign",color:"green"};case"monthlyExpenses":return{icon:"Home",color:"blue"};case"investments":return{icon:"TrendingUp",color:"purple"};case"savingsGoals":return{icon:"PiggyBank",color:"teal"};case"guiltFreeSpending":return{icon:"ShoppingBag",color:"yellow"};default:return{icon:"BarChart2",color:"gray"}}},A=(e,t)=>{const n=new Map(e.map(a=>[a.name,a])),o=[];for(const a of t)n.has(a.name)?(o.push({...n.get(a.name),id:a.name,isDefault:!0}),n.delete(a.name)):o.push({id:a.name,name:a.name,amount:a.defaultAmount,isDefault:!0});for(const a of n.values())o.push(a);return o.sort((a,s)=>a.name.localeCompare(s.name))},F=()=>{const t=A(r.incomeStreams,b("incomeStreams")).reduce((l,i)=>l+(i.amount||0),0),n=r.monthlyExpenses.reduce((l,i)=>l+(i.amount||0),0),o=r.investments.reduce((l,i)=>l+(i.amount||0),0),a=r.savingsGoals.reduce((l,i)=>l+(i.amount||0),0),s=r.guiltFreeSpending.reduce((l,i)=>l+(i.amount||0),0),d=0,m=t,c=d+n+o+a+s,x=m-c;return{totalIncomeFromStreams:t,totalMonthlyExpenses:n,totalInvestments:o,totalSavings:a,totalGuiltFree:s,totalAllocated:c,remainingIncome:x,effectiveGrossMonthlyIncome:m}},C=()=>{const e=F(),t=document.getElementById("summary-section"),n=e.remainingIncome>=0?"text-green-600":"text-red-600";t.innerHTML=`
                <div class="border-r pr-2">
                    <p class="text-xs text-gray-600 font-medium">Total Income</p>
                    <p class="text-xl font-bold text-purple-700">${h(e.effectiveGrossMonthlyIncome)}</p>
                </div>
                <div class="border-r pr-2">
                    <p class="text-xs text-gray-600 font-medium">Total Allocated</p>
                    <p class="text-xl font-bold text-blue-700">${h(e.totalAllocated)}</p>
                </div>
                <div class="col-span-2 p-1 rounded-lg">
                    <p class="text-xs text-gray-600 font-medium">Remaining Guilt-Free Income</p>
                    <p class="text-2xl font-black ${n}">${h(e.remainingIncome)}</p>
                </div>
            `},p=(e,t)=>{const{icon:n,color:o}=L(e),a=r[e],s=b(e),d=A(a,s),m=d.reduce((l,i)=>l+(i.amount||0),0),c=document.getElementById(e+"Section"),x=d.map(l=>{const i=l.isDefault||s.some($=>$.name===l.name&&!l.id),S=i?"disabled":"",w=i?"text-gray-600 font-medium":"focus:ring-1 focus:ring-gray-300";return`
                    <li class="flex flex-col sm:flex-row items-center justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm transition duration-150 hover:shadow-md">
                        <input
                            type="text"
                            value="${l.name}"
                            data-id="${l.id}"
                            data-field="${e}"
                            data-action="update-name"
                            class="flex-grow p-1 text-base font-medium bg-transparent focus:outline-none rounded-md ${w}"
                            placeholder="Category Name"
                            ${S}
                        />
                        <div class="flex items-center space-x-2 mt-2 sm:mt-0 print:hidden">
                            <input
                                type="number"
                                value="${l.amount===0?"":l.amount}"
                                data-id="${l.id}"
                                data-field="${e}"
                                data-action="update-amount"
                                placeholder="0.00"
                                class="w-28 text-right p-1 border rounded-md focus:border-${o}-400 transition"
                                step="0.01"
                                min="0"
                            />
                            <button data-id="${l.id}" data-field="${e}" data-action="delete" class="text-gray-400 hover:text-red-500 p-1 rounded-full transition duration-300" title="Delete Item">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <span class="font-semibold text-base sm:ml-4 mt-2 sm:mt-0 text-right w-28 print:block hidden">${h(l.amount)}</span>
                    </li>
                `}).join("");c.innerHTML=`
                <div class="border-t pt-4">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-xl font-semibold flex items-center text-${o}-600">
                            <i data-lucide="${n}" class="mr-2 text-${o}-500 w-5 h-5"></i>${t}
                        </h3>
                        <button 
                            data-field="${e}" 
                            data-action="clear-section" 
                            class="text-sm text-red-500 hover:text-red-700 font-medium transition duration-300 flex items-center p-1 rounded-md border border-transparent hover:border-red-500 print:hidden" 
                            title="Clear all entries in this section">
                            <i data-lucide="x-circle" class="w-4 h-4 mr-1"></i>
                            Clear Section
                        </button>
                    </div>
                    
                    <ul class="space-y-2 mb-4">
                        ${x}
                    </ul>

                    <!-- Custom Item Form -->
                    <form data-field="${e}" data-action="add-item" class="flex flex-col sm:flex-row gap-2 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200 print:hidden">
                        <input type="text" name="name" placeholder="Add Custom Item" class="flex-grow p-2 border border-gray-300 rounded-lg text-sm" required />
                        <input type="number" name="amount" placeholder="Amount ($)" class="w-full sm:w-32 p-2 border border-gray-300 rounded-lg text-sm" step="0.01" min="0" required />
                        <button type="submit" class="bg-${o}-600 text-white p-2 rounded-lg hover:bg-${o}-700 transition duration-300 flex items-center justify-center" title="Add Custom Item">
                            <i data-lucide="plus-circle" class="w-5 h-5"></i>
                        </button>
                    </form>

                    <p class="text-right font-bold mt-2 text-lg">Total ${t}: <span class="text-${o}-700">${h(m)}</span></p>
                </div>
            `,lucide.createIcons()},f=()=>{C(),p("incomeStreams",u.incomeStreams.title),p("monthlyExpenses",u.monthlyExpenses.title),p("investments",u.investments.title),p("savingsGoals",u.savingsGoals.title),p("guiltFreeSpending",u.guiltFreeSpending.title),document.getElementById("main-content").classList.remove("hidden")};let y=null;const E=(e,t,n)=>{document.getElementById("modal-title").textContent=e,document.getElementById("modal-message").textContent=t,document.getElementById("confirmation-modal").classList.remove("hidden"),y=n},v=()=>{document.getElementById("confirmation-modal").classList.add("hidden"),y=null},I=(e,t,n)=>{const o=r[e],a=o.findIndex(m=>m.id===t||m.name===t);let s=[...o];const d=b(e);if(a!==-1)s[a]={...s[a],...n};else if(d.find(c=>c.name===t)){const c={id:t,name:t,amount:n.amount,isDefault:!0};s.push(c)}else{console.error("Attempted to update item not found in state or defaults:",t);return}r[e]=s,f()},B=(e,t)=>{let n=r[e];const o=n.filter(s=>s.id!==t);let a;if(o.length!==n.length)a=o;else{const s=n.findIndex(d=>d.name===t);if(s!==-1)n[s].amount=0,a=n.filter(d=>(d.amount||0)>0||d.isCustom);else return}r[e]=a,f()},D=(e,t,n)=>{const o=parseFloat(n);if(isNaN(o)||o<0){g("Please enter a valid amount.");return}if(b(e).map(m=>m.name).includes(t)||r[e].some(m=>m.name===t)){g(`Item named "${t}" already exists or is a default category.`);return}const s={id:crypto.randomUUID(),name:t,amount:o,isCustom:!0},d=[...r[e],s];r[e]=d,f(),g(`Added custom item: ${t}.`,!1)},G=e=>{const t=u[e].title;E(`Clear ${t}?`,`This will reset all data in the "${t}" section to zero. Are you sure you want to proceed?`,()=>{r[e]=[],g(`${t} section cleared successfully.`,!1),f()})},M=()=>{E("Clear Entire Plan?","DANGER: This will clear ALL entries from Income, Expenses, Savings, Investments, and Guilt-Free Spending. This cannot be undone (and is not saved to a database). Are you absolutely sure?",()=>{Object.keys(u).forEach(t=>{r[t]=[]}),g("Entire Spending Plan cleared successfully and reset to defaults.",!1),f()})},T=e=>{const t=e.target,n=t.getAttribute("data-action"),o=t.getAttribute("data-id"),a=t.getAttribute("data-field");if(!(!o||!a))if(n==="update-amount"&&e.type==="change"){const s=t.value===""?0:parseFloat(t.value);!isNaN(s)&&s>=0&&I(a,o,{amount:s})}else n==="update-name"&&e.type==="change"&&t.value.trim()!==""&&I(a,o,{name:t.value.trim()})},k=e=>{const t=e.target.closest("button");if(!t)return;const n=t.getAttribute("data-action"),o=t.getAttribute("data-id"),a=t.getAttribute("data-field");n==="delete"?(e.preventDefault(),B(a,o)):n==="clear-section"&&(e.preventDefault(),G(a))},P=e=>{if(e.target.getAttribute("data-action")==="add-item"){e.preventDefault();const t=e.target.getAttribute("data-field"),n=e.target.elements.name.value.trim(),o=e.target.elements.amount.value;n&&o?(D(t,n,o),e.target.reset()):g("Please fill out both name and amount.")}};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("main-content").addEventListener("change",T),document.getElementById("main-content").addEventListener("click",k),document.getElementById("main-content").addEventListener("submit",P),document.getElementById("global-clear-btn").addEventListener("click",M),document.getElementById("print-plan-btn").addEventListener("click",()=>{window.print()}),document.getElementById("modal-cancel").addEventListener("click",v),document.getElementById("modal-confirm").addEventListener("click",()=>{y&&y(),v()}),f()});
