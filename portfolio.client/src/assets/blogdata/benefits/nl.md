# Migration of a Legacy Authentication System to Azure AD B2C

## The Challenge

This project focused on a benefits platform for a government organization used by thousands of active and retired employees. The application consisted of an ASP.NET MVC web application with integrated React components and relied on a legacy IdentityServer for authentication. The objective was to migrate this authentication mechanism to Azure AD B2C and move authentication management to the cloud.

A key challenge was the lack of comprehensive documentation for the existing system. It was necessary to thoroughly analyze the current behavior, define a migration strategy, and implement it without causing downtime or forcing users to reset their passwords. Given the diverse user base, including both active employees and retirees, ease of use was a critical requirement.

## Technical Approach

After analyzing the existing architecture, it became clear that we had access to the hashed passwords stored in the legacy IdentityServer. This enabled us to migrate users without requiring them to change their passwords.

Azure AD B2C was configured using custom policies that supported authentication against both systems during the transition period. When a user attempted to log in, Azure AD B2C was queried first. If the user was not yet present, their credentials were validated against the legacy IdentityServer. Upon successful authentication, the password was automatically stored in Azure AD B2C, completing the migration. From the end user perspective, this process was entirely transparent.

This approach removed the need to coordinate large scale password resets and allowed for a gradual migration based on natural user login behavior.

## Architectural Decisions

A deliberate decision was made to use Azure AD B2C custom policies instead of standard user flows. This provided the flexibility required to implement hybrid authentication logic. While custom policies have a steeper learning curve, they offered the level of control needed to manage the migration in a secure and predictable way.

Rather than performing a one time bulk migration, we opted for a phased approach where users were migrated automatically as they logged in. This significantly reduced risk and allowed us to monitor the process in production and address edge cases as they arose.

During the transition phase, a secure connection between Azure AD B2C and the legacy IdentityServer was maintained, including appropriate fallback mechanisms to ensure reliability and continuity of authentication.

## Results and Impact

The migration was completed successfully with no downtime and a minimal number of support requests. Users were seamlessly transitioned to the new system without password resets, which was a key success factor.

In addition to completing the migration, the move to Azure AD B2C prepared the application for future enhancements. The platform provides built in support for multi factor authentication, conditional access, and integration with other cloud services, capabilities that would have been difficult to implement in the legacy setup.

## Key Learnings

This project highlighted the importance of thoroughly understanding legacy systems, especially when documentation is limited. It also demonstrated how existing technical assets, such as access to hashed passwords, can be leveraged to design user friendly migration strategies. Finally, it reinforced that making well considered architectural choices early on, even when they appear more complex initially, leads to a smoother and more robust execution.

My role included analyzing the existing system, designing the migration strategy, and delivering the implementation through to completion. The project provided valuable experience in balancing technical constraints with user experience considerations within a large and diverse user base.

---

**Context:** Flexstaffing for Orbid

**Tech stack:** ASP.NET MVC, React, Azure AD B2C, IdentityServer, Azure hosting

---

**Context:** Flexstaffing voor Orbid

**Tech stack:** MVC Asp.net, React, Azure AD B2C, IdentityServer, Azure hosting
