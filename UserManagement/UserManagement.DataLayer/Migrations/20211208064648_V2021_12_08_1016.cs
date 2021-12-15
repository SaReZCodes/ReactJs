using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserManagement.DataLayer.Migrations
{
    public partial class V2021_12_08_1016 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "UserTokens",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "UserTokens",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "UserRoles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "UserRoles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "UserGroups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "UserGroups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "Roles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "Roles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "Groups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "Groups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "GroupRole",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "GroupRole",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "DateTime('now')",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "SYSDATETIME()");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "UserTokens",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "UserTokens",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "UserRoles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "UserRoles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "UserGroups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "UserGroups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "Roles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "Roles",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "Groups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "Groups",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDateTime",
                table: "GroupRole",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InsertDateTime",
                table: "GroupRole",
                type: "TEXT",
                nullable: false,
                defaultValueSql: "SYSDATETIME()",
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValueSql: "DateTime('now')");
        }
    }
}
