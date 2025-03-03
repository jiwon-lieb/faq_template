const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked"); 

const faqDir = path.join(__dirname, "faq");
const outputFilePath = path.join(__dirname, "/faq.json");

const faqData = fs.readdirSync(faqDir)
  .filter(file => file.endsWith(".md"))
  .map(file => {
    const filePath = path.join(faqDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      slug: data.slug,
      category: data.category || "기타",  // Default to '기타' if no category is set
      tags: data.tags || [],
      body: marked.parse(content.trim())
    };
  });

// Group FAQs by category
const groupedFAQs = faqData.reduce((acc, faq) => {
  if (!acc[faq.category]) {
    acc[faq.category] = [];
  }
  acc[faq.category].push({
    title: faq.title,
    slug: faq.slug,
    tags: faq.tags,
    body: faq.body
  });
  return acc;
}, {});

// Convert object to an array format suitable for frontend
const structuredFAQs = Object.keys(groupedFAQs).map(category => ({
  category,
  faqs: groupedFAQs[category]
}));

// Save as JSON
fs.writeFileSync(outputFilePath, JSON.stringify(structuredFAQs, null, 2), "utf-8");

console.log("✅ (๑•᎑•๑)♬* 성공이에요 - FAQ JSON 파일이 업데이트되었습니다!");


