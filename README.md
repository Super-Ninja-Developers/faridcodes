# Farid Personal Blog

A retro-styled multilingual blog built with Next.js, where I share my thoughts, projects, and ideas about software development.

## 🚀 Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Content:** Markdown with Gray Matter
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Internationalization:** Built-in routing with language prefixes

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Super-Ninja-Developers/farid-codes.git
cd farid-codes
```

2. Install dependencies:


```shellscript
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:


```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 📝 Content Structure

The blog content is organized in the following structure:

```plaintext
articles/
├── en/
│   ├── article-1.md
│   └── article-2.md
├── es/
│   ├── articulo-1.md
│   └── articulo-2.md
└── pt/
    ├── artigo-1.md
    └── artigo-2.md
```

Each article must include the following frontmatter:

```markdown
---
title: "Your Article Title"
description: "A brief description of your article"
category: "Category Name"
date: "YYYY-MM-DD"
---
```

## 🌍 Adding Translations

1. Fork the repository
2. Create a new branch for your translation:


```shellscript
git checkout -b translation/article-name-language
```

3. Add your translated article in the corresponding language folder:

1. English articles go in `articles/en/`
2. Spanish articles go in `articles/es/`
3. Portuguese articles go in `articles/pt/`



4. Make sure to:

1. Keep the same filename as the original article
2. Translate the frontmatter content
3. Maintain the same markdown structure
4. Keep any code blocks unchanged unless they contain comments



5. Create a Pull Request with your translation


## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch:


```shellscript
git checkout -b feature/amazing-feature
```
or
```shellscript
git checkout -b translation/article-1
```


3. Commit your changes:


```shellscript
git commit -m 'Add some amazing feature'
```

4. Push to the branch:


```shellscript
git push origin feature/amazing-feature
```

5. Open a Pull Request


### Types of Contributions

- 🌍 Translations of existing articles
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements


### Guidelines for Articles

1. **File Format**: Use markdown (`.md`) files
2. **Images**: Place them in the `public/images/articles/` directory
3. **Code Snippets**: Use proper syntax highlighting
4. **Frontmatter**: Include all required metadata
5. **Language**: Write in clear, concise language
6. **Links**: Use relative paths for internal links


## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who help with translations and content
- Built with Next.js and deployed on Vercel
- Retro styling inspired by Solarized color scheme


## 🤔 Questions?

Feel free to [open an issue](https://github.com/Super-Ninja-Developers/farid-codes/issues) or reach out to me directly.

```plaintext

This README provides:
1. Clear project overview
2. Installation instructions
3. Content structure explanation
4. Detailed contribution guidelines
5. Translation process
6. File structure information
7. License and acknowledgments

Contributors will have all the information they need to:
- Set up the project locally
- Understand the content structure
- Add new articles
- Translate existing content
- Submit pull requests

The formatting is clean and uses emojis to make different sections easily identifiable.
```