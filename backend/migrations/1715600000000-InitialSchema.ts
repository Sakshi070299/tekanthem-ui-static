import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialSchema1715600000000 implements MigrationInterface {
  name = 'InitialSchema1715600000000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

    // Users
    await queryRunner.query(`
      CREATE TYPE "user_role_enum" AS ENUM ('admin', 'editor', 'user');

      CREATE TABLE "users" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" varchar(120) NOT NULL,
        "email" varchar(160) NOT NULL,
        "password_hash" varchar(200) NOT NULL,
        "role" "user_role_enum" NOT NULL DEFAULT 'user',
        "is_active" boolean NOT NULL DEFAULT true,
        "created_at" timestamptz NOT NULL DEFAULT now(),
        "updated_at" timestamptz NOT NULL DEFAULT now(),
        "deleted_at" timestamptz
      );
      CREATE UNIQUE INDEX "users_email_unique" ON "users" ("email");
    `)

    // Contact submissions
    await queryRunner.query(`
      CREATE TYPE "contact_intent_enum" AS ENUM ('demo', 'sales', 'trial', 'general');
      CREATE TYPE "contact_status_enum" AS ENUM ('new', 'contacted', 'qualified', 'closed');

      CREATE TABLE "contact_submissions" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" varchar(120) NOT NULL,
        "email" varchar(160) NOT NULL,
        "phone" varchar(30),
        "company" varchar(160) NOT NULL,
        "employees" varchar(30),
        "product" varchar(30),
        "message" text NOT NULL,
        "intent" "contact_intent_enum" NOT NULL DEFAULT 'general',
        "status" "contact_status_enum" NOT NULL DEFAULT 'new',
        "source" varchar(60),
        "ip_address" inet,
        "user_agent" varchar(500),
        "created_at" timestamptz NOT NULL DEFAULT now()
      );
      CREATE INDEX "contact_submissions_email_idx" ON "contact_submissions" ("email");
      CREATE INDEX "contact_submissions_intent_idx" ON "contact_submissions" ("intent");
      CREATE INDEX "contact_submissions_status_idx" ON "contact_submissions" ("status");
    `)

    // Newsletter
    await queryRunner.query(`
      CREATE TABLE "newsletter_subscribers" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "email" varchar(160) NOT NULL,
        "is_active" boolean NOT NULL DEFAULT true,
        "source" varchar(60),
        "created_at" timestamptz NOT NULL DEFAULT now()
      );
      CREATE UNIQUE INDEX "newsletter_subscribers_email_unique"
        ON "newsletter_subscribers" ("email");
    `)

    // Blog posts
    await queryRunner.query(`
      CREATE TYPE "blog_post_status_enum" AS ENUM ('draft', 'published', 'archived');

      CREATE TABLE "blog_posts" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "slug" varchar(200) NOT NULL,
        "title" varchar(240) NOT NULL,
        "excerpt" varchar(360) NOT NULL,
        "content" text NOT NULL,
        "category" varchar(80) NOT NULL,
        "author" varchar(120) NOT NULL,
        "author_role" varchar(120),
        "cover_image_url" varchar(200),
        "reading_minutes" integer NOT NULL DEFAULT 5,
        "status" "blog_post_status_enum" NOT NULL DEFAULT 'draft',
        "featured" boolean NOT NULL DEFAULT false,
        "published_at" timestamptz,
        "created_at" timestamptz NOT NULL DEFAULT now(),
        "updated_at" timestamptz NOT NULL DEFAULT now(),
        "deleted_at" timestamptz
      );
      CREATE UNIQUE INDEX "blog_posts_slug_unique" ON "blog_posts" ("slug");
      CREATE INDEX "blog_posts_status_idx" ON "blog_posts" ("status");
      CREATE INDEX "blog_posts_status_published_at_idx"
        ON "blog_posts" ("status", "published_at");
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "blog_posts"`)
    await queryRunner.query(`DROP TYPE "blog_post_status_enum"`)
    await queryRunner.query(`DROP TABLE "newsletter_subscribers"`)
    await queryRunner.query(`DROP TABLE "contact_submissions"`)
    await queryRunner.query(`DROP TYPE "contact_status_enum"`)
    await queryRunner.query(`DROP TYPE "contact_intent_enum"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TYPE "user_role_enum"`)
  }
}
