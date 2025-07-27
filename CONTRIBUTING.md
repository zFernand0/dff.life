# Contributing to Designed Financial Freedom

Thank you for your interest in contributing to the Designed Financial Freedom (DFF) website! This document provides guidelines for contributing to the project.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/zfernand0/dff.life.git
   cd dff.life
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or use VS Code task: "Start Live Server"
   ```

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Ensure proper accessibility attributes (alt text, ARIA labels)
- Keep indentation consistent (2 spaces)
- Use meaningful class names

### CSS
- Use Tailwind CSS utility classes when possible
- Custom CSS should be minimal and well-documented
- Follow BEM methodology for custom classes if needed

### JavaScript
- Use modern ES6+ syntax
- Keep functions small and focused
- Add comments for complex logic
- Use meaningful variable and function names

## File Structure

```
docs/
├── index.html              # Main homepage
├── es/                     # Spanish version
│   └── index.html
├── assets/                 # Images, icons, etc.
└── CNAME                   # Custom domain
```

## Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Test your changes locally
   - Ensure responsive design works

3. **Format your code**
   ```bash
   npm run format
   # or use VS Code task: "Format All Files"
   ```

4. **Check for issues**
   ```bash
   npm run lint
   # or use VS Code task: "Check HTML"
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Commit Message Convention

Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## Content Guidelines

### Writing Style
- Use clear, professional language
- Focus on the client's needs and pain points
- Include specific examples and actionable advice
- Maintain a warm, approachable tone

### SEO Considerations
- Use descriptive page titles and meta descriptions
- Include relevant keywords naturally
- Structure content with proper heading hierarchy
- Optimize images with alt text

## Testing Checklist

Before submitting a pull request, ensure:

- [ ] Website loads correctly on desktop and mobile
- [ ] All links work properly
- [ ] Images load and display correctly
- [ ] Contact forms function (if applicable)
- [ ] No console errors
- [ ] Accessibility standards are met
- [ ] Code is properly formatted

## Questions or Issues?

If you have questions or encounter issues:

1. Check existing issues in the repository
2. Create a new issue with a clear description
3. Include steps to reproduce the problem
4. Add screenshots if relevant

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.
